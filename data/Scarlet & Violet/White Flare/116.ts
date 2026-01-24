import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [595],
	set: Set,

	name: {
		en: "Joltik",
		fr: "Statitik",
		de: "Wattzapf",
		it: "Joltik",
		pt: "Joltik",
		es: "Joltik",
		'es-mx': "Joltik"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			de: "Überraschungsangriff",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa",
			es: "Ataque Sorpresa",
			'es-mx': "Ataque Sorpresa"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836126
	}
}

export default card