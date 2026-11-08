import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [92],

	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'es-mx': "Gastly",
		'de-de': "Nebulak",
		'it-it': "Gastly",
		'pt-br': "Gastly"
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
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'es-mx': "Ataque Sorpresa",
			'de-de': "Überraschungsangriff",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684429,
				cardmarket: 877463
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684429,
				cardmarket: 877463
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

}

export default card
