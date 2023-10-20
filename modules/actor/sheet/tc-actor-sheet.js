export default class TCActorSheet extends ActorSheet {
    get template() {
        return `systems/to-change/templates/actor/tc-${this.actor.type}-sheet.hbs`
    }
}