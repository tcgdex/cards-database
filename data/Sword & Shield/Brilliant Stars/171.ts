import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Pride",
		fr: "Fierté de Rosemary",
		es: "Orgullo de Roxy",
		it: "Orgoglio di Mary",
		pt: "Orgulho da Marine",
		de: "Marys Stolz"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
		fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
		es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
		it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
		pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
		de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608691,
		tcgplayer: 263890
	}
}

export default card