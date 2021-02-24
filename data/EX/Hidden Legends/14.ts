import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Shiftry",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Nuzleaf",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Push Aside",
			},
			effect: {
				en: "Look at your opponent's hand and choose 1 Basic Pokémon or Evolution card you find there. Your opponent puts it at the bottom of his or her deck.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supernatural Power",
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 40 damage plus 40 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
