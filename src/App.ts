import "dotenv.config";
import TicketMachine from "./TicketMachine";

class App {
    main() {
        const currency = process.env.CURRENCY
        const pricePerMinute = process.env.PRICE_PER_MINUTE
        const ticketmachine = new TicketMachine()
        
    }
}

const app = new App()
app.main()