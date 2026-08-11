import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Cosmog",
		'fr-fr': "Cosmog",
		'es-es': "Cosmog",
		'it-it': "Cosmog",
		'pt-br': "Cosmog",
		'de-de': "Cosmog"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		789,
	],

	hp: 60,

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

	retreat: 1,

	description: {
		'en-us': "Its body is gaseous and frail. It slowly grows as it collects dust from the atmosphere.",
	},

	thirdParty: {
		cardmarket: 315990,
		tcgplayer: 157677
	}
}

export default card
