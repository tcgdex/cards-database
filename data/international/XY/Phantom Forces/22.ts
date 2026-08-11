import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Alomomola",
		'fr-fr': "Mamanbo",
		'es-es': "Alomomola",
		'it-it': "Alomomola",
		'pt-br': "Alomomola",
		'de-de': "Mamolida"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		594,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Super Deep Dive",
				'fr-fr': "Super Gros Plongeon",
				'es-es': "Superzambullida Submarina",
				'it-it': "Super Immersione",
				'pt-br': "Mergulho Super Profundo",
				'de-de': "Super Tieftaucher"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Cura 30 puntos de daño a este Pokémon. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Cura questo Pokémon da 30 danni. Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Cure 30 de danos deste Pokémon. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfar",
				'de-de': "Surfer"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore.",
	},

	thirdParty: {
		cardmarket: 281826,
		tcgplayer: 94155
	}
}

export default card
