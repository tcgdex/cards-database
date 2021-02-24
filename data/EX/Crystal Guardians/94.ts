import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Jirachi ex",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 90,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Star Light",
			},
			effect: {
				en: "As long as your opponent has any Pokémon-ex or Stage 2 Evolved Pokémon in play, Jirachi ex pays Colorless less Energy to use Shield Beam or Super Psy Bolt.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shield Beam",
			},
			effect: {
				en: "During your opponent's next turn, your opponent can't use any Poké-Powers on his or her Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
			},

			damage: 50,

		},
	],






}

export default card
