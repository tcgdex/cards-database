import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Métang",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		375,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Core Beam",
				'fr-fr': "Faisceau Central",
			},
			effect: {
				'en-us': "Discard a Metal Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Metal de ce Pokémon.",
			},
			damage: 80,

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
	retreat: 3,




	description: {
		'en-us': "When two Beldum link together, their psychic power is doubled. Their intelligence, however, remains unchanged.",
	},
}

export default card
