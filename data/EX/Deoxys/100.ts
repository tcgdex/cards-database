import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Hariyama ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 110,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Makuhita",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Commanding Aura",
			},
			effect: {
				en: "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Knock Off",
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Pivot Throw",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
