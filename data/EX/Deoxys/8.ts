import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Gyarados",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dragon Spark",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Retaliation",
			},
			effect: {
				en: "Does 20 damage times the number of damage counters on all of your Magikarp.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulverize",
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 50 more damage.",
			},
			damage: 50,

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
