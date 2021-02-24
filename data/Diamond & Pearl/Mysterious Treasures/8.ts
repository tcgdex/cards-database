import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Feraligatr",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 130,
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
			],
			name: {
				en: "Energy Cyclone",
			},
			effect: {
				en: "Choose as many Energy cards from your hand as you like and show them to your opponent. This attack does 20 damage times the number of Energy cards you chose. Put those Energy cards on top of your deck. Shuffle your deck afterward.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Breaking Tail",
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],





}

export default card
