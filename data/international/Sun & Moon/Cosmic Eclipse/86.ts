import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'it-it': "Rotom",
		'pt-br': "Rotom",
		'de-de': "Rotom"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cycle Draw",
				'fr-fr': "Pioche Cyclique",
				'es-es': "Ciclorrobo",
				'it-it': "Pesca Ciclica",
				'pt-br': "Compra Cíclica",
				'de-de': "Kreiszug"
			},
			effect: {
				'en-us': "Discard a card from your hand. If you do, draw 2 cards.",
				'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
				'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas.",
				'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte.",
				'pt-br': "Descarte 1 carta da sua mão. Se fizer isto, compre 2 cartas.",
				'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Assist",
				'fr-fr': "Assistance Énergétique",
				'es-es': "Asistencia de Energía",
				'it-it': "Assistienergia",
				'pt-br': "Socorro de Energia",
				'de-de': "Energieförderung"
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
				'es-es': "Une 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
				'it-it': "Assegna a piacimento ai tuoi Pokémon in panchina due carte Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cartas de Energia básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
				'de-de': "Lege 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
			},

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
		'en-us': "Research continues on this Pokémon, which could be the power source of a unique motor.",
	},

	thirdParty: {
		cardmarket: 408074,
		tcgplayer: 201260
	}
}

export default card
