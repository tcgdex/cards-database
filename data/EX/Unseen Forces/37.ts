import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Corsola",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		222,
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
				en: "Cry for Help",
			},
			effect: {
				en: "Search your deck for a Water or Fighting Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Double Attack",
			},
			effect: {
				en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
