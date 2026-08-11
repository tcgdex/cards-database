import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
		'es-es': "Duskull",
		'it-it': "Duskull",
		'pt-br': "Duskull",
		'de-de': "Zwirrlicht"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 60,

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
				'en-us': "Dark Guidance",
				'fr-fr': "Conseiller Obscur",
				'es-es': "Guía Siniestra",
				'it-it': "Guida Oscura",
				'pt-br': "Diretriz Obscura",
				'de-de': "Dunkles Geleit"
			},
			effect: {
				'en-us': "Put a Basic Pokémon from your discard pile onto your Bench.",
				'fr-fr': "Prenez un Pokémon de base dans votre pile de défausse et placez-le sur votre Banc.",
				'es-es': "Pon 1 Pokémon Básico de tu pila de descartes en tu Banca.",
				'it-it': "Prendi un Pokémon Base dalla tua pila degli scarti e mettilo in panchina.",
				'pt-br': "Coloque 1 Pokémon Básico da sua pilha de descarte no seu Banco.",
				'de-de': "Lege 1 Basis-Pokémon aus deinem Ablagestapel auf deine Bank."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Spooky Shot",
				'fr-fr': "Tir Effrayant",
				'es-es': "Disparo Embrujado",
				'it-it': "Colpomistero",
				'pt-br': "Tiro Assustador",
				'de-de': "Spukschuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It doggedly pursues its prey wherever it goes. However, the chase is abandoned at sunrise.",
	},

	thirdParty: {
		cardmarket: 299455,
		tcgplayer: 138533
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
