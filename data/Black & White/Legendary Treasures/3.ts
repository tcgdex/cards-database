import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Shuckle",
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
				en: "Share",
			},
			effect: {
				en: "Heal 40 damage from 1 of your Benched Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Double Stab",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
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

	thirdParty: {
		cardmarket: 281154
	}
}

export default card
