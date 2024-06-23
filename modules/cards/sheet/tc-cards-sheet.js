export default class TCCardsSheet extends DocumentSheet {
    get template() {
        return `systems/to-change/templates/cards/tc-${this.document.type}-sheet.hbs`
    }
}