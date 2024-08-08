export default function preloadHandlebarsTemplates() {
    console.log("To Change | Preloading Handlebars Templates")
    return loadTemplates([
        `systems/${game.system.id}/templates/actor/parts/change-cross.hbs`,
        `systems/${game.system.id}/templates/actor/parts/transgender-change-wheel.hbs`,
        `systems/${game.system.id}/templates/cards/parts/cards-config.hbs`,
        `systems/${game.system.id}/templates/cards/parts/cards-list.hbs`
    ]);
}
