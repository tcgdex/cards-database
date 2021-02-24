import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Camerupt",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Numel",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Back Burner",
			},
			effect: {
				en: "Search your discard pile for up to 2 basic Energy cards and attach them to your Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Split Bomb",
			},
			effect: {
				en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
