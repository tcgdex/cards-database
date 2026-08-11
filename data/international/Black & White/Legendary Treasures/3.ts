import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Shuckle",
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		213,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Share",
			},
			effect: {
				'en-us': "Heal 40 damage from 1 of your Benched Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Double Stab",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
			},
			damage: 40,

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
		'en-us': "The berries stored in its vaselike shell eventually become a thick, pulpy juice.",
	},

	thirdParty: {
		cardmarket: 281154,
		tcgplayer: 89194
	}
}

export default card
