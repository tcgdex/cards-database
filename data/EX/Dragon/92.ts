import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Kingdra ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seadra",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Genetic Memory",
			},
			effect: {
				en: "Use any attack from Kingdra ex's Basic Pokémon card or Stage 1 Evolution card. (Kingdra ex doesn't have to pay for that attack's Energy cost.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydrocannon",
			},
			effect: {
				en: "Does 50 damage plus 20 more damage for each Water Energy attached to Kingdra ex but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
