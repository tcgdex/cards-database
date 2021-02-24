import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Kyogre ex",
	},
	illustrator: "Yasuki Watanabe",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 100,
	types: [
		"Water",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Flotation",
			},
			effect: {
				en: "As long as Kyogre ex has 1 Energy or less attached to it, the Retreat Cost for each of your Kyogre ex is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Shot",
			},
			effect: {
				en: "Discard 2 Energy attached to Kyogre ex. Choose 1 of your opponent's Pokémon. This attack does 70 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

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
