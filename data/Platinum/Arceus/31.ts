import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Sceptile",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],

	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grovyle",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Supply",
			},
			effect: {
				en: "You may attach a basic Energy card from your hand to 1 of your Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Cut",
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
			},
			damage: "70x",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
