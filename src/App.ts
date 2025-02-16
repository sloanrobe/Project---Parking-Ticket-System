import "dotenv/config";
import TicketMachine from "./TicketMachine";

class App {
    async main() {
        const type = process.env.MACHINE_TYPE
        const currency = process.env.CURRENCY
        const pricePerMinute = process.env.PRICE_PER_MINUTE
        
    if(!currency || !pricePerMinute) {
        throw new Error("Error in configuration");   
    }

    //Instantiation
    const ticketmachine = new TicketMachine(currency, Number(pricePerMinute))
    
    if(type === "1") {
        await ticketmachine.startInteractionConsole();
    } else if (type === "2") {
        await ticketmachine.startInteractionAPI();
    }
    
    ticketmachine.endInteraction()
    }
}

const app = new App()
app.main()
