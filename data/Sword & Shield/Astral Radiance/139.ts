import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Dark Patch",
		fr: "Fortifiant Obscur",
		es: "Refuerzo Oscuro",
		it: "Distintivo Oscuro",
		pt: "Fragmento Sombrio",
		de: "Finsterpflaster"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Attach a basic Darkness Energy card from your discard pile to 1 of your Benched Darkness Pokémon.",
		fr: "Attachez une carte Énergie Darkness de base de votre pile de défausse à l'un de vos Pokémon Darkness de Banc.",
		es: "Une 1 carta de Energía Darkness Básica de tu pila de descartes a 1 de tus Pokémon Darkness en Banca.",
		it: "Assegna a uno dei tuoi Pokémon Darkness in panchina una carta Energia base Darkness dalla tua pila degli scarti.",
		pt: "Ligue 1 carta de Energia Darkness básica da sua pilha de descarte a 1 dos seus Pokémon Darkness no Banco.",
		de: "Lege 1 Basis-Darkness-Energiekarte aus deinem Ablagestapel an 1 Darkness-Pokémon auf deiner Bank an."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658800,
		tcgplayer: 272391
	}
}

export default card