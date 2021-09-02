import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Entei-EX",
		fr: "Entei-EX",
		es: "Entei-EX",
		it: "Entei-EX",
		pt: "Entei-EX",
		de: "Entei-EX"
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Grand Flame",
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
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

	retreat: 3
}

export default card
