import {rawlist} from '@inquirer/prompts'
import express, { Request } from "express"

export default class TicketMachine {
    private currency: string
    private pricePerMinute: number
    private app = express()
    private port = process.env.PORT || 3000

    constructor(_currency: string, _pricePerMinute: number) {
        this.currency = _currency
        this.pricePerMinute = _pricePerMinute    
    }

    async startInteractionConsole() {
        const duration = await this.askForDurationInConsole()
        const price = this.calculatePrice(duration)
        this.displayPrice(price)
        }

    async startInteractionAPI(): Promise<void> {
        return new Promise<void>((resolve) => {
            this.app.get("/duration", (req: Request) => {
                const duration = req.params.duration;
                const price = this.calculatePrice(Number(duration));
                this.displayPrice(price);
                resolve();
            });

            this.app.listen(this.port, () => {
                console.log(`To set the wanted duration, please send a GET request to http://localhost:${this.port}/:duration`)
            })
        })
    }
    
    endInteraction() {
        console.log('Thank you for parking with us!')
    }

    private displayPrice(price: number) {
        console.log(`The price will be ${price}${this.currency}.`)
    }
    
    private calculatePrice(duration: number) {
        return duration * this.pricePerMinute
    }

    private async askForDurationInConsole() {
        const answer = await rawlist({
            message: "Select a duration",
            choices: [
                { name: "30 minutes", value: 30 },
                { name: "1 hour", value: 60 },
                { name: "2 hours", value: 120 },
                { name: "4 hours", value: 240 },
                { name: "8 hours", value: 480 },
            ],
        });
        return answer
    }
    }