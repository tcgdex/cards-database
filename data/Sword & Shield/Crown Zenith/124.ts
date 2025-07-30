import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Bede",
		fr: "Travis",
		es: "Berto",
		it: "Beet",
		pt: "Beda",
		de: "Betys"
	},

	rarity: "Holo Rare",
	category: "Trainer",

	effect: {
		en: "Attach a basic Energy card from your hand to 1 of your Benched Pokémon.",
		fr: "Attachez une carte Énergie de base de votre main à l'un de vos Pokémon de Banc.",
		es: "Une 1 carta de Energía Básica de tu mano a 1 de tus Pokémon en Banca.",
		it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua mano.",
		pt: "Ligue 1 carta de Energia básica da sua mão a 1 dos seus Pokémon no Banco.",
		de: "Lege 1 Basis-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691843
	}
}

export default card
