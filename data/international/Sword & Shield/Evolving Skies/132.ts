import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Lee HyunJung",

	attacks: [{
		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Surprise Attack",
			'de-de': "Überraschungsangriff"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Flip a coin. If tails, this attack does nothing.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [333],

	description: {
		'en-us': "It constantly grooms its cotton-like wings. It takes a shower to clean itself if it becomes dirty."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574188,
				tcgplayer: 246863
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574188,
				tcgplayer: 246863
			}
		},
	],
}

export default card
