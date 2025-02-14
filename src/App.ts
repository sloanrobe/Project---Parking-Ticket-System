import "dotenv/config";
import TicketMachine from "./TicketMachine";

class App {
    main() {
        const currency = process.env.CURRENCY
        const pricePerMinute = process.env.PRICE_PER_MINUTE
        
    if(!currency || !pricePerMinute) {
        throw new Error("Error in configuration");   
    }

    //Instantiation
    const ticketmachine = new TicketMachine(currency, Number(pricePerMinute))
    //new TicketMachine("EUR", 2).startInteraction()
    ticketmachine.startInteraction()
    ticketmachine.endInteraction()
    }
}

const app = new App()
app.main()