import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

    name: {
		'en-us': "Sprigatito",
		'fr-fr': "Poussacha",
		'es-es': "Sprigatito",
		'it-it': "Sprigatito",
		'de-de': "Felori",
		'pt-br': "Sprigatito",
		'ko-kr': "나오하"
    },

    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",

    hp: 60,
    types: ["Grass"],
    dexId: [906],

    description: {
        en: "The sweet scent its body gives off mesmerizes those around it. The scent grows stronger when this Pokémon is in the sun."
    },

    stage: "Basic",

    attacks: [
        {
		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'de-de': "Blattwerk",
			'pt-br': "Folhagem",
			'ko-kr': "나뭇잎"
		},
        damage: 20,
        cost: ["Grass"]
        }
    ],

    weaknesses: [
        {
        type: "Fire",
        value: "+20"
        }
    ],

    retreat: 1
}

export default card