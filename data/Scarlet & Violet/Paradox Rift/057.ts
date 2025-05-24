import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Chien-Pao",
		fr: "Baojian",
		es: "Chien-Pao",
		it: "Chien-Pao",
		pt: "Chien-Pao",
		de: "Baojian"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Snow Bringer",
			fr: "Porteur de Neige",
			es: "Portador de Nieve",
			it: "Portaneve",
			pt: "Emissário das Neves",
			de: "Schneebringer"
		},

		effect: {
			en: "Attach up to 2 Basic {W} Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie {W} de base de votre pile de défausse à l'un de vos Pokémon.",
			es: "Une hasta 2 cartas de Energía {W} Básica de tu pila de descartes a uno de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon fino a due carte Energia base {W} dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia {W} Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Lege bis zu 2 Basis-{W}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Wrathful Blade",
			fr: "Lame du Courroux",
			es: "Cuchilla Iracunda",
			it: "Lama Iraconda",
			pt: "Espada da Ira",
			de: "Zorniges Schwert"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Anesaki Dynamic"
}

export default card