import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Kyogre Star",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Critical Collection",
			},
			effect: {
				en: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Water Energy cards and attach them to Kyogre Star.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sheer Cold",
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
