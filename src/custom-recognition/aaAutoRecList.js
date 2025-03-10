
import { autoRecMigration } from "./autoRecMerge.js";
export class aaAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            search: "",
            melee: {
                0: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.dagger"),
                    animation: 'dagger',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                1: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.flurryofblows"),
                    animation: 'flurryofblows',
                    variant: 'physical',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                2: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.greataxe"),
                    animation: 'greataxe',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                3: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.greatclub"),
                    animation: 'greatclub',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                4: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.greatsword"),
                    animation: 'greatsword',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                5: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.handaxe"),
                    animation: 'handaxe',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                6: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.sword"),
                    animation: 'sword',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                7: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.mace"),
                    animation: 'mace',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                8: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.maul"),
                    animation: 'maul',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                9: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.spear"),
                    animation: 'spear',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                10: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.rapier"),
                    animation: 'rapier',
                    variant: '01',
                    color: 'white',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
                11: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("AUTOANIM.unarmedstrike"),
                    animation: 'unarmedstrike',
                    variant: 'physical',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    menuType: "weapon",
                },
            },
            range: {
                0: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.crossbow"),
                    animation: 'bolt',
                    variant: 'physical',
                    color: 'orange',
                    repeat: 1,
                    delay: 500,
                    type: "weapon",
                    menuType: "weapon",
                },
                1: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.bow"),
                    animation: 'arrow',
                    variant: 'regular',
                    color: 'regular',
                    repeat: 1,
                    delay: 500,
                    type: "weapon",
                    menuType: "weapon",
                },
                2: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.disintegrate"),
                    animation: 'disintegrate',
                    variant: '01',
                    color: 'green',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                    menuType: "spell",
                },
                3: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.eldritchblast"),
                    animation: 'eldritchblast',
                    variant: '01',
                    color: 'purple',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                    menuType: "spell",
                },
                4: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.firebolt"),
                    animation: 'firebolt',
                    variant: '01',
                    color: 'orange',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                    menuType: "spell",
                },
                5: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.guidingbolt"),
                    animation: 'guidingbolt',
                    variant: '01',
                    color: 'blueyellow',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                    menuType: "spell",
                },
                6: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.magicmissile"),
                    animation: 'magicmissile',
                    variant: '01',
                    color: 'purple',
                    repeat: 3,
                    delay: 500,
                    type: "spell",
                    menuType: "spell",
                },
                7: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.rayoffrost"),
                    animation: 'rayoffrost',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                    menuType: "spell",
                },
                8: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.scorchingray"),
                    animation: 'scorchingray',
                    variant: '01',
                    color: 'orange',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                    menuType: "spell",
                },
                9: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.witchbolt"),
                    animation: 'witchbolt',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    type: "spell",
                    menuType: "spell",
                },
            },
            static: {
                0: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.curewounds"),
                    animation: 'curewounds',
                    staticOptions: 'staticSpells',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1.5,
                    below: true,
                    type: "targetDefault",
                    menuType: "spell",
                },
                1: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.itemHealingWord"),
                    animation: 'generichealing',
                    staticOptions: 'staticSpells',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1.5,
                    below: true,
                    type: "targetDefault",
                    menuType: "spell",
                },
                2: {
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.tollthedead"),
                    animation: 'tollthedead',
                    staticOptions: 'staticSpells',
                    variant: 'complete',
                    color: 'green',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    below: false,
                    type: "target",
                    menuType: "spell",
                },
                3: {
                    staticOptions: 'creature',
                    animation: "bite",
                    below: false,
                    color: "red",
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.bite"),
                    repeat: 1,
                    scale: 1,
                    type: "target",
                    variant: "01",
                    menuType: "creature",
                },
                4: {
                    staticOptions: 'creature',
                    animation: "claw",
                    below: false,
                    color: "red",
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.claw"),
                    repeat: 1,
                    scale: 1,
                    type: "target",
                    variant: "01",
                    menuType: "creature",
                },
            },
            templates: {
                0: {
                    animation: "calllightning",
                    below: false,
                    color: 'blueorange',
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.calllightning"),
                    occlusionAlpha: 0.7,
                    occlusionMode: "3",
                    opacity: 0.75,
                    overhead: true,
                    persist: true,
                    persistType: 'overheadtile',
                    removeTemplate: true,
                    repeat: 1,
                    type: 'circle',
                    variant: '01',
                    scaleX: 1,
                    scaleY: 1,
                    menuType: "circle",              
                },
                1: {
                    animation: "fogcloud",
                    below: false,
                    color: 'white',
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.fogcloud"),
                    occlusionAlpha: 0.65,
                    occlusionMode: "3",
                    opacity: 0.75,
                    overhead: true,
                    persist: true,
                    persistType: 'overheadtile',
                    removeTemplate: true,
                    repeat: 1,
                    type: 'circle',
                    variant: '01',
                    scaleX: 1,
                    scaleY: 1,
                    menuType: "circle",              
                },
                2: {
                    animation: "thunderwave",
                    below: false,
                    color: "blue",
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.thunderwave"),
                    opacity: 0.75,
                    persist: false,
                    removeTemplate: true,
                    repeat: 3,
                    type: "rect",
                    variant: "01",
                    scaleX: 1,
                    scaleY: 1,
                    menuType: "square",              
                }
            },
            auras: {
                0: {
                    animation: "spiritguardians",
                    below: false,
                    color: 'darkblue',
                    custom: false,
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.spiritguardians"),
                    opacity: 0.75,
                    scale: 3.5,
                    static: false,
                    tint: '#ffffff',
                    variant: '01',
                    ignoretargets: true,
                    menuType: "spell",
                },
            },
            preset: {
                0: {
                    animateSelf: true,
                    animateTarget: true,
                    animation: "bardicinspiration",
                    below: false,
                    hidden: true,
                    marker: true,
                    name: game.i18n.localize("AUTOANIM.bardicinspiration"),
                    scale: 1,
                    selfAnimation: "music",
                    selfColor: "blue",
                    selfMarkerColor: "greenorange",
                    targetAnimation: "bardicinspiration",
                    targetColor: "greenorange",
                    targetMarkerColor: "greenorange",
                },
                1: {
                    addCTA: false,
                    animation: "bless",
                    below: true,
                    color: "yellow",
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.bless"),
                    scale: 1.5,
                },
                2: {
                    animation: "shieldspell",
                    below: false,
                    color: "blue",
                    endeffect: "outro_explode",
                    hidden: true,
                    name: game.i18n.localize("AUTOANIM.shield"),
                    scale: 1,
                    variant: "01",
                },
                3: {
                    animation: "teleportation",
                    below: false,
                    color: "blue",
                    custom: false,
                    hidden: true,
                    hideTemplate: false,
                    name: game.i18n.localize("AUTOANIM.mistystep"),
                    range: 30,
                    scale: 1.5,
                    subAnimation: "mistystep",
                    measureType: "alternating",
                    custom02: false,
                    customPath02: "",
                    subAnimation02: "mistystep",
                    variant: "01",
                    variant02: "02",
                    color02: "blue",
                    scale02: 1.5,
                    menuType: "spell",
                    menuType02: "spell",
                }
            },
            version: 4,
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export const dnd5eAutoRec = new aaAutorec();