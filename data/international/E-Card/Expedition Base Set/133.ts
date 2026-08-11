import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "Yuichi Sawayama",
	rarity: "Common",
	category: "Pokemon",
	trainerType: "Supporter",
	set: Set,

	dexId: [128],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Horn Hazard",
				'fr-fr': "Chanc'korne",
				'de-de': "Gefährliches Horn"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 30,
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Tauros does 20 damage to itself.",
				'fr-fr': "Tauros s'inflige 20 dégâts.",
				'de-de': "Tauros fügt sich selber 20 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89760,
				cardmarket: 275008
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89760,
				cardmarket: 275008
			},
		},
	],
}

export default card
