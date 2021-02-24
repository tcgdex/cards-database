import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Feraligatr",
	},
	illustrator: "Masakazu Fukuda",
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

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
			},
			effect: {
				en: "As long as Feraligatr is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Pull Away",
			},
			effect: {
				en: "If your opponent has 5 or more cards in his or her hand, your opponent discards a number of cards until your opponent has 4 cards left in his or her hand.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tonnage",
			},
			effect: {
				en: "You may do 50 damage plus 30 more damage. If you do, Feraligatr does 30 damage to itself.",
			},
			damage: 50,

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
