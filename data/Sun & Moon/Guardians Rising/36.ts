import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		594,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Borne Ashore",
				fr: "Ramené au Rivage",
			},
			effect: {
				en: "Put a Basic Pokémon from either player's discard pile onto its owner's Bench.",
				fr: "Prenez un Pokémon de base dans la pile de défausse d’un des joueurs et placez-le sur son Banc.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
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
