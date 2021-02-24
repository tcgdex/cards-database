import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Metapod",
	},
	illustrator: "Asako Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Caterpie",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Adaptive Evolution",
			},
			effect: {
				en: "This Pokémon can evolve during your first turn or the turn you play it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
