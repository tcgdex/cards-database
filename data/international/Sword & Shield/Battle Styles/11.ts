import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [664],
	set: Set,

	name: {
		'en-us': "Scatterbug",
		'fr-fr': "Lépidonille",
		'es-es': "Scatterbug",
		'it-it': "Scatterbug",
		'pt-br': "Scatterbug",
		'de-de': "Purmel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

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

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "The powder that covers its body regulates its temperature, so it can live in any region or climate."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544951,
				tcgplayer: 234064
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544951,
				tcgplayer: 234064
			}
		},
	],
}

export default card
