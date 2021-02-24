import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Kingdra ex δ",
	},
	illustrator: "Masahiko Ishii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extra Smoke",
			},
			effect: {
				en: "Any damage done to your Stage 2 Pokémon-ex by your opponent's attacks is reduced by 10 (before applying Weakness and Resistance).",
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
				en: "Energy Link",
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Kingdra ex.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Protective Swirl",
			},
			effect: {
				en: "Kingdra ex has no Weakness during your opponent's next turn.",
			},
			damage: 80,

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
