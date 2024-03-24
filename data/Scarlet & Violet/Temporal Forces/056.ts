import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		it: "Vikavolt",
		pt: "Vikavolt"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
			es: "Rayo Mach",
			it: "Fulmine Mach",
			pt: "Raio Supersônico"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Circuit Cannon",
			fr: "Canon Circuit",
			es: "Cañón Circuito",
			it: "Circuito Cannone",
			pt: "Canhão Circuito"
		},

		effect: {
			en: "This attack does 80 more damage for each of your Benched Charjabug.",
			fr: "Cette attaque inflige 80 dégâts supplémentaires pour chacun de vos Chrysapile de Banc.",
			es: "Este ataque hace 80 puntos de daño más por cada uno de tus Charjabug en Banca.",
			it: "Questo attacco infligge 80 danni in più per ogni Charjabug nella tua panchina.",
			pt: "Este ataque causa 80 pontos de dano a mais para cada um dos seus Charjabug no Banco."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card