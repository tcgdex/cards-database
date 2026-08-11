import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
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
				'en-us': "Splash",
				'fr-fr': "Trempette",
				'de-de': "Platscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "For no reason, it jumps and splashes about, making it easy for predators like Pidgeotto to catch it mid-jump.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87035,
				cardmarket: 279704
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87035,
				cardmarket: 279704
			},
		},
	],

}

export default card
