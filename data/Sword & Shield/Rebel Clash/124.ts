import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Morgrem",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Impidimp",
	},



	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "False Surrender",
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
