import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Walrein ex",
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Icy Aura",
			},
			effect: {
				en: "As long as Walrein ex is your Active Pokémon, put 1 damage count on each Active Pokémon (both yours and your opponent's) between turns, excluding Water Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Arrow",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],






}

export default card
