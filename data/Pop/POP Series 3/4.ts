import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Minun",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		312,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer Up",
			},
			effect: {
				en: "Draw a card. If Plusle is in play, draw 2 cards instead.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Negative Ion",
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 10 (before applying Weakness and Resistance).",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Power Bolt",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any Poké-Powers. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

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
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
