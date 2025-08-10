import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [566],
	set: Set,

	name: {
		en: "Archen",
		fr: "Arkéapti",
		de: "Flapteryx",
		it: "Archen",
		pt: "Archen",
		es: "Archen",
		'es-mx': "Archen"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Acrobatics",
			fr: "Acrobatie",
			de: "Akrobatik",
			it: "Acrobazia",
			pt: "Acrobático",
			es: "Acróbata",
			'es-mx': "Acrobacia"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card