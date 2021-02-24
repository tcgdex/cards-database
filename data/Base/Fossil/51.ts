import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Krabby",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		98,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Krabby and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Irongrip",
			},

			damage: 20,

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
