import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Klinklang",
		fr: "Cliticlic de N",
		es: "Klinklang de N",
		de: "Ns Klikdiklak",
		it: "Klinklang di N",
		pt: "Klinklang do N",
		'es-mx': "Klinklang de N"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Magnetic Blast",
			fr: "Explosion Magnétique",
			es: "Explosión Magnética",
			de: "Magnetstoß",
			it: "Magnetebomba",
			pt: "Explosão Magnética",
			'es-mx': "Explosión Magnética"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Triple Smash",
			fr: "Triple Éclate",
			es: "Golpe Triple",
			de: "Dreifachschmetterer",
			it: "Tripla Schiacciata",
			pt: "Pancada Tripla",
			'es-mx': "Triple Golpazo"
		},

		effect: {
			en: "Flip 3 coins. This attack does 120 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 120 puntos de daño por cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 120 pontos de dano para cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 120 puntos de daño por cada cara."
		},

		damage: "120×"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
