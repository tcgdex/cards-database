import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [447],
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Jab",
			'fr-fr': "Taquet",
			'es-es': "Puya",
			'it-it': "Stoccata",
			'pt-br': "Murro",
			'de-de': "Boxschlag"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Naoyo Kimura",

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	description: {
		'en-us': "They communicate with one another using their auras. They are able to run all through the night.",
	},

	thirdParty: {
        cardmarket: 702408,
        tcgplayer: 488001
    }
}

export default card