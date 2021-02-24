import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Slowbro",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Airhead",
			},
			effect: {
				en: "If you have 2, 4, or 6 Prize cards left, this Pokémon can't attack.",
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
				en: "Lazy Headbutt",
			},
			effect: {
				en: "This Pokémon is now Asleep.",
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
