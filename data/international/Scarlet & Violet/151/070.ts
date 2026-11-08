import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [70],
	set: Set,

	name: {
		'fr-fr': "Boustiflor",
		'en-us': "Weepinbell",
		'es-es': "Weepinbell",
		'it-it': "Weepinbell",
		'pt-br': "Weepinbell",
		'de-de': "Ultrigaria"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Chétiflor",
		'en-us': "Bellsprout",
		'es-es': "Bellsprout",
		'it-it': "Bellsprout",
		'pt-br': "Bellsprout",
		'de-de': "Knofensa"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Coupe",
			'en-us': "Cut",
			'es-es': "Corte",
			'it-it': "Taglio",
			'pt-br': "Cortar",
			'de-de': "Zerschneider"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Fluide Éclaboussant",
			'en-us': "Spray Fluid",
			'es-es': "Fluido Rociado",
			'it-it': "Fluidospray",
			'pt-br': "Fluido Spray",
			'de-de': "Sprühwasser"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It spits out Poison Powder to immobilize the enemy and then finishes it with a spray of Acid.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733665,
				tcgplayer: 516563,
				cardtrader: 261159
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733665,
				tcgplayer: 516563,
				cardtrader: 261159
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
