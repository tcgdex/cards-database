import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		fr: "Miraidon-ex",
		en: "Miraidon ex",
		es: "Miraidon ex",
		it: "Miraidon-ex",
		pt: "Miraidon ex",
		de: "Miraidon-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Pioche Rapide",
			en: "Rapid Draw",
			es: "Robo Rápido",
			it: "Pescalesto",
			pt: "Retirada Rápida",
			de: "Schnellzieher"
		},

		effect: {
			fr: "Piochez 2 cartes.",
			en: "Draw 2 cards.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			fr: "Techno-Turbo",
			en: "Techno Turbo",
			es: "Tecno Turbo",
			it: "Tecnoturbo",
			pt: "Turbo Tecnológico",
			de: "Techturbo"
		},

		effect: {
			fr: "Attachez une carte Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			en: "Attach a Basic {L} Energy card from your discard pile to 1 of your Benched Pokémon.",
			es: "Une 1 carta de Energía {L} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {L} dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia {L} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-{L}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 150
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 725159
	}
}

export default card