import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Silcoon",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		266,
	],
	hp: 60,
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
				en: "During your opponent's turn, if Silcoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Gooey Thread",
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
			},
			damage: 10,

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
