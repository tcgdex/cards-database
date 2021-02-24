import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Feraligatr",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Riptide",
			},
			effect: {
				en: "Does 10 damage plus 10 damage times the number of Energy cards in your discard pile. Then, shuffle all Energy cards from your discard pile into your deck.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
