import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [509],
	set: Set,

	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa",
			'de-de': "Überraschungsangriff"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608540,
				tcgplayer: 263807
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608540,
				tcgplayer: 263807
			}
		},
	],
}

export default card
