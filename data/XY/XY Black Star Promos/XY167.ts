import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Garchomp EX",
		fr: "Carchacrok EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Shred",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	stage: "Basic",
	retreat: 2
}

export default card
