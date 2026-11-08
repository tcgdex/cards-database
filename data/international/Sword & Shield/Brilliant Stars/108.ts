import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [444],
	set: Set,

	name: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
		'es-es': "Gabite",
		'it-it': "Gabite",
		'pt-br': "Gabite",
		'de-de': "Knarksel"
	},

	illustrator: "hatachu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'es-es': "Gible",
		'it-it': "Gible",
		'pt-br': "Gible",
		'de-de': "Kaumalat"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Fighting"],

		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'es-es': "Garra Dragón",
			'it-it': "Dragartigli",
			'pt-br': "Garra de Dragão",
			'de-de': "Drachenklaue"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon emits ultrasonic waves from a protrusion on either side of its head to probe pitch-dark caves.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608654,
				tcgplayer: 263828
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608654,
				tcgplayer: 263828
			}
		},
	],
}

export default card
