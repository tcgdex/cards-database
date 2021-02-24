import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Sunflora",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		192,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sunkern",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Plant",
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trip Over",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
