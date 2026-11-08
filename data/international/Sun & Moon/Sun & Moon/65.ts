import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

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
	rarity: "Rare",
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
		'en-us': "Motionless as if dead, its body is faintly warm to the touch. In the distant past, it was called the cocoon of the stars.",
	},

	thirdParty: {
		cardmarket: 295376,
		tcgplayer: 126936
	}
}

export default card
