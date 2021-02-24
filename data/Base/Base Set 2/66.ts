import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Bellsprout",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		69,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Whip",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Bellsprout and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
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
