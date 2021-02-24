import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Politoed ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		186,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Upward Lick",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. If that Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch and Run",
			},
			effect: {
				en: "Switch Politoed ex with 1 of your Benched Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Politoed ex. If the Defending Pokémon has fewer remaining HP than Politoed ex's, this attack does 120 damage instead.",
			},
			damage: 70,

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
