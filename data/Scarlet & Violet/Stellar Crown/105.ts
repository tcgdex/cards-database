import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal ex",
		fr: "Melmetal-ex",
		es: "Melmetal ex",
		it: "Melmetal-ex",
		pt: "Melmetal ex",
		de: "Melmetal-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			en: "Iron Swing",
			fr: "Frappe de Fer",
			es: "Ferrogolpe",
			it: "Ferrocolpo",
			pt: "Giro Metálico",
			de: "Eisenschwung"
		},

		effect: {
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card