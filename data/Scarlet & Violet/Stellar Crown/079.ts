import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [308],
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
	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
		es: "Meditite",
		it: "Meditite",
		pt: "Meditite",
		de: "Meditie"
	},
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
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Fujimoto Gold",

	thirdParty: {
		cardmarket: 785933
	}
}

export default card
