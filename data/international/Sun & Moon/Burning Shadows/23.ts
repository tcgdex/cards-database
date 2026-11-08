import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Simisear",
		'fr-fr': "Flamoutan",
		'es-es': "Simisear",
		'it-it': "Simisear",
		'pt-br': "Simisear",
		'de-de': "Grillchita"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		514,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare Recharge",
				'fr-fr': "Flambée Rechargée",
				'es-es': "Recarga Ígnea",
				'it-it': "Ricarica Ustionante",
				'pt-br': "Recarga Ardente",
				'de-de': "Fackelaufladung"
			},
			effect: {
				'en-us': "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Fire de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A flame burns inside its body. It scatters embers from its head and tail to sear its opponents.",
	},

	thirdParty: {
		cardmarket: 299429,
		tcgplayer: 138501
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
