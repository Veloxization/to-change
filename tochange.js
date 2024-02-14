import TCActorSheet from "./modules/actor/sheet/tc-actor-sheet.js";

Hooks.once("init", function() {
    console.log("To Change | Initializing To Change System")

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet(
        game.system.id,
        TCActorSheet,
        { label: game.i18n.localize("TC.Sheets.CharacterSheet"), types: ["character"], makeDefault: true }
    );

    CONFIG.fontDefinitions.Euphorigenic = {
        editor: true,
        fonts: [
            {
                urls: [`systems/${game.system.id}/fonts/Euphorigenic.ttf`],
            },
        ],
    };
});