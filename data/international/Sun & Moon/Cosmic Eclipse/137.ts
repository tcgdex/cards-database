import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Alolan Sandshrew",
		'fr-fr': "Sabelette d’Alola",
		'es-es': "Sandshrew de Alola",
		'it-it': "Sandshrew di Alola",
		'pt-br': "Sandshrew de Alola",
		'de-de': "Alola-Sandan"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Run Around",
				'fr-fr': "Course Effrénée",
				'es-es': "Correr Alrededor",
				'it-it': "Correre Intorno",
				'pt-br': "Zoar",
				'de-de': "Herumrennen"
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
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe Acier",
				'es-es': "Garra Metal",
				'it-it': "Ferrartigli",
				'pt-br': "Garra de Metal",
				'de-de': "Metallklaue"
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
		'en-us': "After fleeing a volcanic eruption, it ended up moving to an area of snowy mountains. Its ice shell is as hard as steel.",
	},

	thirdParty: {
		cardmarket: 408334,
		tcgplayer: 201181
	}
}

export default card
