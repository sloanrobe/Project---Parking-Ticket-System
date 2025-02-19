import fs from "node:fs"

export default class TicketMachine {
    private currency: string
    private pricePerMinute: number
    
    private timeout = 7

    constructor(_currency: string, _pricePerMinute: number) {
        this.currency = _currency
        this.pricePerMinute = _pricePerMinute    
    }

    private displayPrice(price: number) {
        console.log(`The price will be ${price}${this.currency}.`)
    }
    
    private calculatePrice(duration: number) {
        return duration * this.pricePerMinute
    }
}