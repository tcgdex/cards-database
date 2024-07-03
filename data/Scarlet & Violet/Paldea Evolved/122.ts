import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Amassel",
		en: "Naclstack",
		es: "Naclstack",
		it: "Naclstack",
		pt: "Naclstack",
		de: "Sedisal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Canon à Sel",
			en: "Salt Cannon",
			es: "Cañón de Sal",
			it: "Cannone Sparasale",
			pt: "Canhão de Sal",
			de: "Salzkanone"
		},

		effect: {
			fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			en: "Flip 3 coins. This attack does 60 damage for each heads.",
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
		holo: false
	}
}

export default card