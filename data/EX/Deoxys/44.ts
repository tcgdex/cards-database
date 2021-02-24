import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Plusle",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		311,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Positive Spark",
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Pokémon that has any Poké-Powers. Don't apply Weakness and Resistance.",
			},

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
