import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Umbreon",
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
			},

			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers or any other effects on the Defending Pokémon.",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
