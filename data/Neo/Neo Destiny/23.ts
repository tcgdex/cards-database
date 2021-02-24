import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Lanturn",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Searchlight",
			},
			effect: {
				en: "Flip a coin. If heads, each player may choose a card from his or her discard pile and put it into his or her hand.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Spark",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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





}

export default card
