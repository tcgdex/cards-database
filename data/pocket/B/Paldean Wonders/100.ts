import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'en-us': "Meowscarada",
		'fr-fr': "Miascarade",
		'es-es': "Meowscarada",
		'it-it': "Meowscarada",
		'de-de': "Maskagato",
		'pt-br': "Meowscarada",
		'ko-kr': "마스카나"
	},

    suffix: "EX",
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",

    hp: 160,
    types: ["Grass"],
    evolveFrom: {
		'en-us': "Floragato",
		'fr-fr': "Matourgeon",
		'es-es': "Floragato",
		'it-it': "Floragato",
		'de-de': "Feliospa",
		'pt-br': "Floragato",
		'ko-kr': "나로테"
    },
    dexId: [908],

    stage: "Stage2",

    attacks: [
        {
            name: {
                en: "Flower Trick",
            },
            cost: ["Grass"],
            effect: {
                en: "Choose a spot from among your opponent's Active Spot and Bench. At the end of your opponent's next turn, do 70 damage to the Pokémon in the spot you chose.",
            },
        },
        {
            name: {
                en: "Solar Beam",
                fr: "Lance-Soleil",
                es: "Rayo Solar",
                'es-mx': "Rayo Solar",
                de: "Solarstrahl",
                it: "Solarraggio",
                pt: "Raio Solar"
            },
            damage: 80,
            cost: ["Grass", "Grass"],
        },
    ],

    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],

    retreat: 1,
}

export default card