import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Nymble",
		fr: "Lilliterelle",
		es: "Nymble",
		'es-mx': "Nymble",
		de: "Micrick",
		it: "Nymble",
		pt: "Nymble"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	dexId: [919],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Flail Around",
			fr: "Fléau Bougeant",
			es: "Aleteo Frenético",
			'es-mx': "Meneo Frenético",
			de: "Rumrudern",
			it: "Flagellamento",
			pt: "Espancamento"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857671
	}
}

export default card