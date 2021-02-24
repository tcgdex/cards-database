import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Absol",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bad News",
			},
			effect: {
				en: "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Prize Count",
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage.",
			},
			damage: 20,

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
