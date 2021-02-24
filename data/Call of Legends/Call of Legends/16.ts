import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Magmortar",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Crush",
			},
			effect: {
				en: "Discard the top 3 cards from your deck. This attack does 50 damage times the number of Energy cards you discarded.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mantle Bazooka",
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Magmortar.",
			},
			damage: 100,

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
