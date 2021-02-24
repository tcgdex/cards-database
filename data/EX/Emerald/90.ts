import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Altaria ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Swablu",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mist",
			},
			effect: {
				en: "Any damage done to Altaria ex by attacks from Stage 2 Evolved Pokémon (both yours and your opponent's) is reduced by 30 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dive",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Mist",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			},
			damage: 70,

		},
	],






}

export default card
