import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'de-de': "Trasla"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slap",
				'fr-fr': "Gifle",
				'de-de': "Hieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Teleportation Burst",
				'fr-fr': "Téléportation explosive",
				'de-de': "Blitz-Teleportation"
			},
			effect: {
				'en-us': "Switch Ralts with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Tarsal avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Trasla gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277365,
		tcgplayer: 88560
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

