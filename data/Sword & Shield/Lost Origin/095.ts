import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		pt: "Gligar",
		de: "Skorgla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Cyclone Pincers",
			fr: "Pinces Cyclone",
			es: "Pinzas Ciclón",
			it: "Chele Cicloniche",
			pt: "Pinças de Ciclone",
			de: "Kneiferwirbel"
		},

		effect: {
			en: "Flip 4 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card