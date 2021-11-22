import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Garchomp EX",
		fr: "M-Carchacrok EX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 210,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Garchomp-EX",
		fr: "Carchacrok-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crimson Edge",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself for each damage counter on it.",
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	suffix: "EX",
	retreat: 0
}

export default card
