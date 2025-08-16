import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [415],
	set: Set,

	name: {
		fr: "Apitrini",
		en: "Combee",
		es: "Combee",
		it: "Combee",
		pt: "Combee",
		de: "Wadribie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Double Tour",
			en: "Double Spin",
			es: "Doble Giro",
			it: "Doppioturbo",
			pt: "Giro Duplo",
			de: "Doppeldreher"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yoriyuki Ikegami",

	thirdParty: {
		cardmarket: 715480
	}
}

export default card