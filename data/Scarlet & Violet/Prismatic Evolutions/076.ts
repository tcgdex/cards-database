import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax ex",
		fr: "Ronflex-ex",
		es: "Snorlax ex",
		pt: "Snorlax ex",
		it: "Snorlax-ex",
		de: "Relaxo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			es: "Fuerza",
			pt: "Força",
			it: "Forza",
			de: "Stärke"
		},

		damage: 80
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Toss-and-Turn Press",
			fr: "Pression Retournement",
			es: "Presionar y Dar Vueltas",
			pt: "Compressono",
			it: "Pressa Gira e Rigira",
			de: "Herumwälzende Presse"
		},

		effect: {
			en: "Flip 3 coins. This attack does 120 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 120 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 120 pontos de dano para cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu."
		},

		damage: "120×"
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "N-DESIGN Inc."
}

export default card