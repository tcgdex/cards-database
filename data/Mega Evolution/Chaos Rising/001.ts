import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886393,
				tcgplayer: 693561
			}
		},
	],

	name: {
		en: "Weedle",
		fr: "Aspicot",
		es: "Weedle",
		'es-mx': "Weedle",
		de: "Hornliu",
		it: "Weedle",
		pt: "Weedle"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [13],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			es: "Ataque Sorpresa",
			'es-mx': "Ataque Sorpresa",
			de: "Überraschungsangriff",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa"
		},

		cost: ["Grass"],
		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card