import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sekio",

	description: {
		en: "With a body made of plasma, it can inhabit all sorts of machines. It loves to surprise others."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Surprise Short",
			fr: "Court-Circuit Surprise",
			de: "Überraschender Kurzschluss",
			es: "Cortocircuito Sorpresa",
			pt: "Curto-circuito Surpresa",
			it: "Cortocircuito a Sorpresa"
		},

		effect: {
			en: "Discard all Pokémon Tools from all of your opponent's Pokémon.",
			fr: "Défaussez tous les Outils Pokémon de tous les Pokémon de votre adversaire.",
			de: "Lege alle Pokémon-Ausrüstungen von allen Pokémon deines Gegners auf den Ablagestapel.",
			es: "Descarta todas las Herramientas Pokémon de todos los Pokémon de tu rival.",
			pt: "Descarte todas as Ferramentas Pokémon de todos os Pokémon do seu oponente.",
			it: "Scarta tutte le carte Oggetto Pokémon da tutti i Pokémon del tuo avversario."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			de: "Statischer Schock",
			es: "Impacto Estático",
			pt: "Choque de Estática",
			it: "Shock Statico"
		},

		damage: 30
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card