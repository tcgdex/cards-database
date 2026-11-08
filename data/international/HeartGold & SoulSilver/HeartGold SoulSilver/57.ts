import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'de-de': "Raupy"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [10],

	hp: 30,

	types: [
		"Grass"
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

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its feet have suction cups designed to stick to any surface. It tenaciously climbs trees to forage."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84138,
				cardmarket: 279029
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84138,
				cardmarket: 279029
			}
		},
	],

}

export default card
