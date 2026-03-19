import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [285],
	set: Set,

	name: {
		en: "Shroomish",
		fr: "Balignon",
		es: "Shroomish",
		it: "Shroomish",
		pt: "Shroomish",
		de: "Knilz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Headbutt",
			fr: "Double Coup d'Boule",
			es: "Doble Cabezazo",
			it: "Doppia Bottintesta",
			pt: "Cabeçada Dupla",
			de: "Doppelte Kopfnuss"
		},

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			es: "Bomba Germen",
			it: "Semebomba",
			pt: "Bomba de Sementes",
			de: "Samenbomben"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Yoriyuki Ikegami",

	thirdParty: {
		cardmarket: 760636
	}
}

export default card