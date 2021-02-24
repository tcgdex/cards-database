import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Exeggcute",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Eggsplosion",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Support",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Energy card and attach it to one of your Benched Pokémon. Shuffle your deck afterward.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
