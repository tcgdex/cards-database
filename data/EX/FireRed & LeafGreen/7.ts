import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Marowak",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Cubone",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Linear Attack",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Basic Pokémon and each Evolution card in your discard pile. You can't add more than 60 damage in this way.",
			},
			damage: 30,

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
