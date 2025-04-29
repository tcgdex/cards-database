import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		es: "Sprigatito",
		de: "Felori",
		it: "Sprigatito",
		pt: "Sprigatito",
		'es-mx': "Sprigatito"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tons of Treading",
			fr: "Pas Perpétuels",
			es: "Sinfín de Pisadas",
			de: "Tüchtiges Treteln",
			it: "Pesta Calpesta",
			pt: "Pisandinho",
			'es-mx': "Pisaditas sin Fin"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
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
