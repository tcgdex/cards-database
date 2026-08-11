import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sobble",
		'fr-fr': "Larméléon",
		'de-de': "Memmeon",
		'it-it': "Sobble",
		'es-es': "Sobble",
		'pt-br': "Sobble",
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
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'de-de': "Überraschungsangriff",
			'it-it': "Attacco a Sorpresa",
			'es-es': "Ataque Sorpresa",
			'pt-br': "Ataque Surpresa",
			'es-mx': "Ataque Sorpresa"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851110,
				tcgplayer: 654378
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851110,
				tcgplayer: 654378
			}
		},
	],
}

export default card
