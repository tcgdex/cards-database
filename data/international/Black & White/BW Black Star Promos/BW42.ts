import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tornadus",
		'fr-fr': "Boréas",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		641,
	],
	hp: 110,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Wheel",
				'fr-fr': "Roue d'Énergie",
			},
			effect: {
				'en-us': "Move an Energy from 1 of your Benched Pokémon to this Pokémon.",
				'fr-fr': "Déplacez une Énergie de l'un de vos Pokémon de Banc vers ce Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hurricane",
				'fr-fr': "Vent Violent",
			},
			effect: {
				'en-us': "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de base de ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
	},
}

export default card
