import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [767],

	name: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Gnaw and Run",
				'fr-fr': "Ronger et Courir",
				'es-es': "Roer y Correr",
				'it-it': "Rosicchia e Fuggi",
				'pt-br': "Roer e Correr",
				'de-de': "Annagen und Abhauen"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It's nature's cleaner—it eats anything and everything, including garbage and rotten things. The ground near its nest is always clean."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482959,
				tcgplayer: 219230
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482959,
				tcgplayer: 219230
			}
		},
	],
}

export default card
