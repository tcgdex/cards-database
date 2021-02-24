import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Luvdisc",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		370,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Even Game",
			},
			effect: {
				en: "Count the number of your opponent's Pokémon. Search your deck for up to that number of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stadium Play",
			},
			effect: {
				en: "If you have a Stadium card in play, remove 1 damage counter from each of your Pokémon. If your opponent has a Stadium card in play, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 10,

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
