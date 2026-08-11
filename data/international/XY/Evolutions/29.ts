import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine",
		'es-es': "Dewgong",
		'it-it': "Dewgong",
		'pt-br': "Dewgong",
		'de-de': "Jugong"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},

	stage: "Stage1",

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
				'en-us': "Heal 40 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Soignez 40 dégâts à ce Pokémon. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Cura 40 puntos de daño a este Pokémon. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Cura questo Pokémon da 40 danni. Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Cure 40 de danos deste Pokémon. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Heile 40 Schadenspunkte bei diesem Pokémon. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'es-es': "Derribo",
				'it-it': "Riduttore",
				'pt-br': "Desmantelar",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Este Pokémon causa 20 danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 90,

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
		'en-us': "Its body is covered with a pure white fur. The colder the weather, the more active it becomes.",
	},

	thirdParty: {
		cardmarket: 293386,
		tcgplayer: 124042
	}
}

export default card
