import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		607,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Teleportation Burst",
				'fr-fr': "Téléportation Explosive",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "While shining a light and pretending to be a guide, it leaches off the life force of any who follow it.",
	},

	thirdParty: {
		cardmarket: 280180,
		tcgplayer: 86809
	}
}

export default card
