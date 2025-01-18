import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Cottonee",
		fr: "Doudouvet",
		es: "Cottonee",
		pt: "Cottonee",
		it: "Cottonee",
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
			pt: "Giro Triplo",
			it: "Triploturbo",
			de: "Dreifachdreher"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card