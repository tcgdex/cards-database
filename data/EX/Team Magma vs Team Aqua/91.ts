import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Entei ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 100,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Searing Flame",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
			},
			effect: {
				en: "Discard 2 Energy attached to Entei ex.",
			},
			damage: 90,

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
