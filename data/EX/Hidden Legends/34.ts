import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Glalie",
	},
	illustrator: "Midori Harada",
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
				en: "Ice Wall",
			},
			effect: {
				en: "Any damage done to Glalie by attacks from your opponent's Pokémon with any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Blizzard",
			},
			effect: {
				en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
			},
			damage: 50,

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
