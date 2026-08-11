import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'fr-fr': "Ampibidou",
		'en-us': "Bellibolt",
		'es-es': "Bellibolt",
		'it-it': "Bellibolt",
		'pt-br': "Bellibolt",
		'de-de': "Wampitz"
	},

    suffix: "EX",
    illustrator: "PLANETA Yamashita",
    rarity: "Two Star",
    category: "Pokemon",

    hp: 160,
    types: ["Lightning"],
    dexId: [939],

    evolveFrom: {
		'fr-fr': "Têtampoule",
		'en-us': "Tadbulb",
		'es-es': "Tadbulb",
		'it-it': "Tadbulb",
		'pt-br': "Tadbulb",
		'de-de': "Blipp"
	},
    stage: "Stage1",

    attacks: [
        {
        name: {
            en: "High-Voltage Cannon",
        },
        damage: "70+",
        cost: ["Lightning", "Lightning"],
        effect: {
            en: "If you have 4 or more Lightning Energy in play, this attack does 70 more damage.",
        },
        },
    ],

    weaknesses: [
        {
        type: "Fighting",
        value: "+20",
        },
    ],
    
    retreat: 3,
}

export default card