import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Raikou",
		'fr-fr': "Raikou",
		'es-es': "Raikou",
		'it-it': "Raikou",
		'pt-br': "Raikou",
		'de-de': "Raikou"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Booming Thunder",
				'fr-fr': "Tonnerre Grondant",
				'es-es': "Trueno Estridente",
				'it-it': "Tuono Tonante",
				'pt-br': "Trovão Estrepitoso",
				'de-de': "Donnerbrüllen"
			},
			effect: {
				'en-us': "Attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie Lightning de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Lightning de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Lightning da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Lightning-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electric Ball",
				'fr-fr': "Boule de Foudre",
				'es-es': "Bola Eléctrica",
				'it-it': "Lamposfera",
				'pt-br': "Bola de Eletricidade",
				'de-de': "Stromball"
			},

			damage: 90,

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

	retreat: 2,

	description: {
		'en-us': "The rain clouds it carries let it fire thunderbolts at will. They say that it descended with lightning.",
	},

	thirdParty: {
		cardmarket: 302170,
		tcgplayer: 146688
	}
}

export default card
