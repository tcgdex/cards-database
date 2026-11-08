import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		'en-us': "Fuecoco",
		'fr-fr': "Chochodile",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740499,
				tcgplayer: 523630,
				cardtrader: 265093
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740499,
				tcgplayer: 523630,
				cardtrader: 265093
			}
		},
	],

	illustrator: "Gemi",

	
}

export default card
