import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
	},

	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'es-es': "Weedle",
		'es-mx': "Weedle",
		'de-de': "Hornliu",
		'it-it': "Weedle",
		'pt-br': "Weedle"
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
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'es-mx': "Ataque Sorpresa",
			'de-de': "Überraschungsangriff",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa"
		},

		cost: ["Grass"],
		damage: 30,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886393,
				tcgplayer: 693561
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886393,
				tcgplayer: 693561
			}
		},
	],
}

export default card
