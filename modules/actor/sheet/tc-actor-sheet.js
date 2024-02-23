export default class TCActorSheet extends ActorSheet {
    get template() {
        return `systems/to-change/templates/actor/tc-${this.actor.type}-sheet.hbs`
    }

    static get defaultOptions() {
        const defaultWidth = 725;
        const defaultHeight = 725;
        return foundry.utils.mergeObject(super.defaultOptions, {
            width: defaultWidth,
            height: defaultHeight,
            resizable: false,
            tabs: [
                {
                    navSelector: ".tabs",
                    contentSelector: ".tc-sheet-content",
                    initial: "change-cross"
                }
            ]
        });
    }
}