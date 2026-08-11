import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [550],
	set: Set,

	name: {
		'en-us': "Hisuian Basculin",
		'fr-fr': "Bargantua de Hisui",
		'es-es': "Basculin de Hisui",
		'it-it': "Basculin di Hisui",
		'pt-br': "Basculin de Hisui",
		'de-de': "Hisui-Barschuft"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
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

		damage: 40
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674054,
				tcgplayer: 283918
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674054,
				tcgplayer: 283918
			}
		},
	],
}

export default card
