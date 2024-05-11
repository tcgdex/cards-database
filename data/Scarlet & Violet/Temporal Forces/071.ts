import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Duosion",
		fr: "Méios",
		es: "Duosion",
		it: "Duosion",
		pt: "Duosion",
		de: "Mitodos"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Trick",
			fr: "Double Ruse",
			es: "Doble Truco",
			it: "Doppio Trucco",
			pt: "Travessura Dupla",
			de: "Doppeltrick"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card