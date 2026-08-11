import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'en-us': "Chien-Pao",
		'fr-fr': "Baojian",
		'es-es': "Chien-Pao",
		'it-it': "Chien-Pao",
		'pt-br': "Chien-Pao",
		'de-de': "Baojian"
	},

    suffix: "EX",
    illustrator: "kodama",
    rarity: "Two Star",
    category: "Pokemon",

    hp: 130,
    types: ["Water"],
    dexId: [1002],

    stage: "Basic",

    attacks: [
        {
            name: {
                en: "Icicle",
                fr: "Concrétion Glacée",
                es: "Témpano",
                'es-mx': "Témpano de Hielo",
                de: "Eiszapfen",
                it: "Stalattite",
                pt: "Pingente de Gelo"
            },
            damage: "20",
            cost: ["Water"],
            },
        {
            name: {
                en: "Diving Icicles",
            },
            cost: ["Water", "Water", "Water"],
            effect: {
                en: "Discard all Water Energy from this Pokémon. This attack does 130 damage to 1 of your opponent's Pokémon.",
            },
        },
    ],

    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],

    retreat: 1,
}

export default card