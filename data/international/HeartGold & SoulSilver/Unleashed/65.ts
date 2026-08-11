import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'de-de': "Teddiursa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [216],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Teddiursa does 10 damage to itself.",
				'fr-fr': "Teddiursa s’inflige 10 dégâts.",
				'de-de': "Teddiursa fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Before food becomes scarce in wintertime, its habit is to hoard food in many hidden locations."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89859,
				cardmarket: 279221
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89859,
				cardmarket: 279221
			}
		},
	],

}

export default card
