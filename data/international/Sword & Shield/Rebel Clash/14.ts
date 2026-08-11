import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [708],

	name: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
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
				'fr-fr': "Placez un Pokémon de base de votre pile de défausse sur votre Banc.",
				'es-es': "Pon 1 Pokémon Básico de tu pila de descartes en tu Banca.",
				'it-it': "Prendi un Pokémon Base dalla tua pila degli scarti e mettilo in panchina.",
				'pt-br': "Coloque 1 Pokémon Básico da sua pilha de descarte no seu Banco.",
				'de-de': "Lege 1 Basis-Pokémon aus deinem Ablagestapel auf deine Bank."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
				'es-es': "Bomba Germen",
				'it-it': "Semebomba",
				'pt-br': "Bomba de Sementes",
				'de-de': "Samenbomben"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "After a lost child perished in the forest, their spirit possessed a tree stump, causing the spirit's rebirth as this Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457463,
				tcgplayer: 213084
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457463,
				tcgplayer: 213084
			}
		},
	],
}

export default card
