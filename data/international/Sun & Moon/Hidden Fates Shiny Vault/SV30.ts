import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
	},
	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Core Beam",
				'fr-fr': "Faisceau Central",
			},
			effect: {
				'en-us': "Discard a Metal Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Metal de ce Pokémon.",
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "Its cells are all magnets. It uses magnetism to communicate with others of its kind.",
	},
}

export default card
