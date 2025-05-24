import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon ex",
		fr: "Miraidon-ex",
		es: "Miraidon ex",
		it: "Miraidon-ex",
		pt: "Miraidon ex",
		de: "Miraidon-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Rapid Draw",
			fr: "Pioche Rapide",
			es: "Robo Rápido",
			it: "Pescalesto",
			pt: "Retirada Rápida",
			de: "Schnellzieher"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			de: "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Techno Turbo",
			fr: "Techno-Turbo",
			es: "Tecno Turbo",
			it: "Tecnoturbo",
			pt: "Turbo Tecnológico",
			de: "Techturbo"
		},

		effect: {
			en: "Attach a Basic {L} Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			es: "Une 1 carta de Energía {L} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {L} dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia {L} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-{L}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 150
	}],

	retreat: 0,
	regulationMark: "G",
	illustrator: "5ban Graphics"
}

export default card