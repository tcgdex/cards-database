import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Aggron",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 130,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heap Up",
			},
			effect: {
				en: "Search your discard pile for all Energy cards and show them to your opponent. If you find any Metal Special Energy cards there, this attack does 40 damage plus 30 more damage. Put all of those Energy cards on top of your deck. Shuffle your deck afterward.",
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Hard Metal",
			},
			effect: {
				en: "You may do 60 damage plus 40 more damage. If you do, Aggron does 40 damage to itself.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+40"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
