import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zigzagoon",
		'fr-fr': "Zigzaton",
		'es-es': "Zigzagoon",
		'es-mx': "Zigzagoon",
		'de-de': "Zigzachs",
		'it-it': "Zigzagoon",
		'pt-br': "Zigzagoon"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [263],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

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
	regulationMark: "I",

	description: {
		'en-us': "A Pokémon with abundant curiosity. It shows an interest in everything, so it always zigzags.",
	},

	illustrator: "Dsuke",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857656,
				tcgplayer: 662246,
				cardtrader: 356867
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857656,
				tcgplayer: 662246,
				cardtrader: 356867
			}
		},
	],
}

export default card
