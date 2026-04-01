import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		'es-mx': "Gastly",
		de: "Nebulak",
		it: "Gastly",
		pt: "Gastly"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			es: "Ataque Sorpresa",
			'es-mx': "Ataque Sorpresa",
			de: "Überraschungsangriff",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684429,
		cardmarket: 877463
	}
}

export default card