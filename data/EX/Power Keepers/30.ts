import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Glalie",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		362,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snorunt",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synergy Effect",
			},
			effect: {
				en: "If Glacia's Stadium is in play, any damage done to Glalie by attacks from your opponent's Pokémon is reduced by 30 (after applying Weakness and Resistance).",
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
				en: "Powder Snow",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
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
				en: "Double-edge",
			},
			effect: {
				en: "Glalie does 10 damage to itself.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
