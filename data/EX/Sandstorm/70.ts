import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Omanyte",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		138,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mysterious Fossil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Team Assembly",
			},
			effect: {
				en: "Search your deck for Omanyte, Kabuto, or any Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bind",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
