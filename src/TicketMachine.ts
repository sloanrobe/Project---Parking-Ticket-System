export default class TicketMachine {
    private currency: string
    private pricePerMinute: number

    constructor(_currency: string, _pricePerMinute: number) {
        this.currency = _currency
        this.pricePerMinute = _pricePerMinute
    }
}