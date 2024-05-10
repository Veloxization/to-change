import TCActorSheet from "./modules/actor/sheet/tc-actor-sheet.js";
import preloadHandlebarsTemplates from "./modules/system/preload-templates.js";

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

    preloadHandlebarsTemplates();
});

Hooks.once("ready", function() {
    $("#pause img").attr("class", "fa-spin pause-image");
});

Hooks.on("renderPause", function() {
    $("#pause img").attr("class", "fa-spin pause-image");
});

Hooks.on("createActor", (document, options, userId) => {
    const actorTG = document.system.transgender;
    actorTG.MATransgender1 = game.i18n.localize("TC.Sheet.TransgenderChange1");
    actorTG.MATransgender2 = game.i18n.localize("TC.Sheet.TransgenderChange2");
    actorTG.MATransgender3 = game.i18n.localize("TC.Sheet.TransgenderChange3");
    actorTG.PFTransgender1 = game.i18n.localize("TC.Sheet.TransgenderChange4");
    actorTG.PFTransgender2 = game.i18n.localize("TC.Sheet.TransgenderChange5");
    actorTG.PFTransgender3 = game.i18n.localize("TC.Sheet.TransgenderChange6");
    actorTG.MFTransgender1 = game.i18n.localize("TC.Sheet.TransgenderChange7");
    actorTG.MFTransgender2 = game.i18n.localize("TC.Sheet.TransgenderChange8");
    actorTG.MFTransgender3 = game.i18n.localize("TC.Sheet.TransgenderChange9");
    actorTG.PATransgender1 = game.i18n.localize("TC.Sheet.TransgenderChange10");
    actorTG.PATransgender2 = game.i18n.localize("TC.Sheet.TransgenderChange11");
    actorTG.PATransgender3 = game.i18n.localize("TC.Sheet.TransgenderChange12");
});

registerHooks();