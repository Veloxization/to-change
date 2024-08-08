export default class TCCardsSheet extends DocumentSheet {
    get template() {
        return `systems/to-change/templates/cards/tc-${this.document.type}-sheet.hbs`
    }

    static get defaultOptions() {
        const defaultWidth = 840;
        const defaultHeight = 700;
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: defaultWidth,
            height: defaultHeight,
            resizable: true,
            tabs: [
                {
                    navSelector: ".tabs",
                    contentSelector: ".tc-sheet-content",
                    initial: "cards-list"
                }
            ]
        });
    }
}