import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Sobble",
		fr: "Larméléon",
		de: "Memmeon",
		it: "Sobble",
		es: "Sobble",
		pt: "Sobble",
		'es-mx': "Sobble"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [816],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			de: "Überraschungsangriff",
			it: "Attacco a Sorpresa",
			es: "Ataque Sorpresa",
			pt: "Ataque Surpresa",
			'es-mx': "Ataque Sorpresa"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654378,
		cardmarket: 851110
	}
}

export default card