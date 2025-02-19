import "dotenv/config";
import ITicketMachine from "./iTicketMachine";
import TicketMachineConsole from "./TicketMachineConsole";

class App {
    async main() {
        const type = process.env.MACHINE_TYPE
        const currency = process.env.CURRENCY
        const pricePerMinute = process.env.PRICE_PER_MINUTE
        
        if(!currency || !pricePerMinute) {
            throw new Error("Error in configuration");   
        }

        let ticketMachine: ITicketMachine
    
        if (type === "1") {
            ticketMachine = new TicketMachineConsole(currency, Number(pricePerMinute))
        } else if (type === "2") {
            throw new Error("TO DO - this has not yet been implemented.")
            // ticketMachine = new TicketMachineAPI()
        } else if (type === "3") {
            throw new Error("TO DO - this has not yet been implemented.")
            // ticketMachine = new TicketMachineReadFile()
        } else {
            throw new Error("Error in configuration")
        }

        await ticketMachine.startInteraction()
        ticketMachine.endInteraction()
    }
}

const app = new App()
app.main()