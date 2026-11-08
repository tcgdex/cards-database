import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [718],

	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Blast",
				'fr-fr': "Violente Déflagration",
				'es-es': "Estallido Vigoroso",
				'it-it': "Forzacolpo",
				'pt-br': "Explosão Poderosa",
				'de-de': "Powerschuss"
			},
			effect: {
				'en-us': "Discard a Fighting Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fighting de ce Pokémon.",
				'es-es': "Descarta 1 Energía Fighting de este Pokémon.",
				'it-it': "Scarta un'Energia Fighting da questo Pokémon.",
				'pt-br': "Descarte 1 Energia Fighting deste Pokémon.",
				'de-de': "Lege 1 Fighting-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		'en-us': "Some say it can change to an even more powerful form when battling those who threaten the ecosystem."
	},

	thirdParty: {
		cardmarket: 499995,
		tcgplayer: 223020
	}
}

export default card
