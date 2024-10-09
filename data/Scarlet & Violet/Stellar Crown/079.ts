import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Medicham",
		fr: "Charmina",
		es: "Medicham",
		it: "Medicham",
		pt: "Medicham",
		de: "Meditalis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Double Smash",
			fr: "Double Broiement",
			es: "Golpe Doble",
			it: "Colpo Duplice",
			pt: "Bordoada Dupla",
			de: "Doppelstoß"
		},

		effect: {
			en: "Flip 2 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card