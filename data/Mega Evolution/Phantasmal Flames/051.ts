import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Trapinch",
		fr: "Kraknoix",
		es: "Trapinch",
		'es-mx': "Trapinch",
		de: "Knacklion",
		it: "Trapinch",
		pt: "Trapinch"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [328],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [328],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Double Headbutt",
			fr: "Double Coup d'Boule",
			es: "Doble Cabezazo",
			'es-mx': "Doble Cabezazo",
			de: "Doppelte Kopfnuss",
			it: "Doppia Bottintesta",
			pt: "Cabeçada Dupla"
		},

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857626
	}
}

export default card