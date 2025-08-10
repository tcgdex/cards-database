import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [933],
	set: Set,

	name: {
		en: "Naclstack",
		fr: "Amassel",
		es: "Naclstack",
		it: "Naclstack",
		pt: "Naclstack",
		de: "Sedisal"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Salt Cannon",
			fr: "Canon à Sel",
			es: "Cañón de Sal",
			it: "Cannone Sparasale",
			pt: "Canhão de Sal",
			de: "Salzkanone"
		},

		effect: {
			en: "Flip 3 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 60 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 60 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "otumami"
}

export default card