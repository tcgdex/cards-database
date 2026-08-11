import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Lotad",
		'fr-fr': "Nenupiot",
		'de-de': "Loturzel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [270],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blot",
				'fr-fr': "Pâté",
				'de-de': "Klecks"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Lotad.",
				'fr-fr': "Retirez à Nenupiot un marqueur de dégât.",
				'de-de': "Entferne 1 Schadensmarke von Loturzel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275844,
				tcgplayer: 86832
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275844,
				tcgplayer: 86832
			}
		},
	],

}

export default card
