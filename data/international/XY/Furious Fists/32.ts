import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Négapi",
		'es-es': "Minun",
		'it-it': "Minun",
		'pt-br': "Minun",
		'de-de': "Minun"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		312,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Negative Discard",
				'fr-fr': "Défausse Négative",
				'es-es': "Descarte Negativo",
				'it-it': "Scarto Negativo",
				'pt-br': "Descarte Negativo",
				'de-de': "Negative Ablage"
			},
			effect: {
				'en-us': "Put 2 basic Energy cards from your discard pile into your hand.",
				'fr-fr': "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
				'es-es': "Pon 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
				'it-it': "Prendi due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 2 cards de Energias básicas da pilha de descarte em sua mão.",
				'de-de': "Nimm 2 Basis-Energiekarten von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Static Shock",
				'fr-fr': "Choc Statique",
				'es-es': "Impacto Estático",
				'it-it': "Shock Statico",
				'pt-br': "Choque de Estática",
				'de-de': "Statischer Schock"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Exposure to electricity from Minun and Plusle promotes blood circulation and relaxes muscles.",
	},

	thirdParty: {
		cardmarket: 281696,
		tcgplayer: 92207
	}
}

export default card
