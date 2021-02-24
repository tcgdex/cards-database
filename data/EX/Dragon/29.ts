import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Graveler",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		75,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Geodude",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Graveler.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Explosion",
			},
			effect: {
				en: "Does 80 damage to each Active Pokémon (both yours and your opponent's).",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
