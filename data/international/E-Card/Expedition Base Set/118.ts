import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	trainerType: "Stadium",
	set: Set,

	dexId: [129],

	hp: 30,

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
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Flail"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of damage counters on Magikarp.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Magicarpe.",
				'de-de': "This attack does 10 damage times the number of damage counters on Magikarp."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87024,
				cardmarket: 274993
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87024,
				cardmarket: 274993
			},
		},
	],
}

export default card
