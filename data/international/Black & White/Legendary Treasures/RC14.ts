import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Eevee",
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Surprise Attack",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions.",
	},

	thirdParty: {
		cardmarket: 281138
	}
}

export default card
