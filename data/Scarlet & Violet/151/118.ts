import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [118],
	set: Set,

	name: {
		fr: "Poissirène",
		en: "Goldeen",
		es: "Goldeen",
		it: "Goldeen",
		pt: "Goldeen",
		de: "Goldini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Triple Frappe",
			en: "Triple Strike",
			es: "Triple Impacto",
			it: "Triplo Colpo",
			pt: "Golpe Triplo",
			de: "Dreifachstoß"
		},

		effect: {
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Eau Aspergeante",
			en: "Sprinkle Water",
			es: "Esparcir Agua",
			it: "Goccioline",
			pt: "Aspergir Água",
			de: "Wassersprüher"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "SIE NANAHARA",

	thirdParty: {
		cardmarket: 733694
	}
}

export default card