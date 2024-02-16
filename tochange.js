import TCActorSheet from "./modules/actor/sheet/tc-actor-sheet.js";

Hooks.once("init", function() {
    console.log("To Change | Initializing To Change System")

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet(
        game.system.id,
        TCActorSheet,
        { label: game.i18n.localize("TC.Sheets.CharacterSheet"), types: ["character"], makeDefault: true }
    );

    CONFIG.fontDefinitions.FoglihtenNo07 = {
        editor: true,
        fonts: [
            {
                urls: [`systems/${game.system.id}/fonts/FoglihtenNo07.ttf`],
            },
        ],
    };
});

Hooks.once("ready", function() {
    $("#pause img").attr("class", "fa-spin pause-image");
});

Hooks.on("renderPause", function() {
    $("#pause img").attr("class", "fa-spin pause-image");
});

registerHooks();