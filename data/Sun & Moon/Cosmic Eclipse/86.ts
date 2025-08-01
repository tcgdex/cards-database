import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
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
				en: "Cycle Draw",
				fr: "Pioche Cyclique",
				es: "Ciclorrobo",
				it: "Pesca Ciclica",
				pt: "Compra Cíclica",
				de: "Kreiszug"
			},
			effect: {
				en: "Discard a card from your hand. If you do, draw 2 cards.",
				fr: "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
				es: "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas.",
				it: "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte.",
				pt: "Descarte 1 carta da sua mão. Se fizer isto, compre 2 cartas.",
				de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Assist",
				fr: "Assistance Énergétique",
				es: "Asistencia de Energía",
				it: "Assistienergia",
				pt: "Socorro de Energia",
				de: "Energieförderung"
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to your Benched Pokémon in any way you like.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
				es: "Une 2 cartas de Energía Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
				it: "Assegna a piacimento ai tuoi Pokémon in panchina due carte Energia base dalla tua pila degli scarti.",
				pt: "Ligue 2 cartas de Energia básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
				de: "Lege 2 Basis-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
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

	thirdParty: {
		cardmarket: 408074
	}
}

export default card
