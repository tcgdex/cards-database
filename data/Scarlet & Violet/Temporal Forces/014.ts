import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [546],
	set: Set,

	name: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		it: "Cottonee",
		pt: "Cottonee",
		de: "Waumboll"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Triple Spin",
			fr: "Triple Tour",
			es: "Triple Giro",
			it: "Triploturbo",
			pt: "Giro Triplo",
			de: "Dreifachdreher"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Kyoko Umemoto",

	thirdParty: {
		cardmarket: 760644
	}
}

export default card