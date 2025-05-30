import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		fr: "Magnéti",
		en: "Magnemite",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Charge Aimantée",
			en: "Magnetic Charge",
			es: "Carga Magnética",
			it: "Magneticarica",
			pt: "Carga Magnética",
			de: "Magnetische Aufladung"
		},

		effect: {
			fr: "Attachez jusqu'à 2 cartes Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			en: "Attach up to 2 Basic {L} Energy cards from your discard pile to 1 of your Benched Pokémon.",
			es: "Une hasta 2 cartas de Energía {L} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base {L} dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia {L} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege bis zu 2 Basis-{L}-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			fr: "Balle Rapide",
			en: "Speed Ball",
			es: "Bola Rápida",
			it: "Velocipalla",
			pt: "Bola Veloz",
			de: "Geschwindigkeitsball"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "ryoma uratsuka"
}

export default card