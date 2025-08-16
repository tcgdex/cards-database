import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [170],
	set: Set,

	name: {
		en: "Chinchou",
		fr: "Loupio",
		es: "Chinchou",
		it: "Chinchou",
		pt: "Chinchou",
		de: "Lampi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Double Voltage",
			fr: "Double Voltage",
			es: "Doble Tensión",
			it: "Doppio Voltaggio",
			pt: "Voltagem Dupla",
			de: "Doppelspannung"
		},

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 785902
	}
}

export default card
