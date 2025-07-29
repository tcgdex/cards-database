import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Dragonair",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dratini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 273945
	}
}

export default card
