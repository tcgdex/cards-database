import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
		'es-es': "Cosmoem",
		'it-it': "Cosmoem",
		'pt-br': "Cosmoem",
		'de-de': "Cosmovum"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		790,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Cosmog",
		'fr-fr': "Cosmog",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Teleport",
				'fr-fr': "Téléport",
				'es-es': "Teletransporte",
				'it-it': "Teletrasporto",
				'pt-br': "Teleporte",
				'de-de': "Teleport"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "There's something accumulating around the black core within its hard shell. People think this Pokémon may come from another world.",
	},

	thirdParty: {
		cardmarket: 315991,
		tcgplayer: 157678
	}
}

export default card
