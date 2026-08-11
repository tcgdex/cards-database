import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [443],
	set: Set,

	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'es-es': "Gible",
		'it-it': "Gible",
		'pt-br': "Gible",
		'de-de': "Kaumalat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740597,
				tcgplayer: 523764,
				cardtrader: 265203
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740597,
				tcgplayer: 523764,
				cardtrader: 265203
			}
		},
	],

	illustrator: "saino misaki",

	
}

export default card
