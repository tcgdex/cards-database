import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Wingull",
		'fr-fr': "Goelise",
		'de-de': "Wingull"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [278],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque surprise",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, l'attaque est sans effet.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275725,
				tcgplayer: 90605
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275725,
				tcgplayer: 90605
			}
		},
	],

}

export default card
