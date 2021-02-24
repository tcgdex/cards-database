import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Cascoon",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		268,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wurmple",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hard Cocoon",
			},
			effect: {
				en: "During your opponent's turn, if Cascoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Thread",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
