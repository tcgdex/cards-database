import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [750],
	set: Set,

	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
		es: "Mudsdale",
		it: "Mudsdale",
		pt: "Mudsdale",
		de: "Pampross"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Mud Stock",
			fr: "Plein de Boue",
			es: "Reserva de Lodo",
			it: "Fangoscorta",
			pt: "Estoque Lamacento",
			de: "Schlammvorrat"
		},

		effect: {
			en: "Attach a Basic Fighting Energy card from your discard pile to each of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Fighting de base de votre pile de défausse à chacun de vos Pokémon de Banc.",
			es: "Une 1 carta de Energía Fighting Básica de tu pila de descartes a cada uno de tus Pokémon en Banca.",
			it: "Assegna a ciascuno dei Pokémon nella tua panchina una carta Energia base Fighting dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia Fighting Básica da sua pilha de descarte a cada um dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-Fighting-Energiekarte aus deinem Ablagestapel an jedes Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "High Horsepower",
			fr: "Cavalerie Lourde",
			es: "Fuerza Equina",
			it: "Forza Equina",
			pt: "Potência Equina",
			de: "Pferdestärke"
		},

		effect: {
			en: "This Pokémon also does 40 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 40 dégâts.",
			es: "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 40 danni a se stesso.",
			pt: "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu."
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
		es: "Mudbray",
		it: "Mudbray",
		pt: "Mudbray",
		de: "Pampuli"
	}
}

export default card