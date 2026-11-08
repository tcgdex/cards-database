import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'de-de': "Vulpix"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [37],

	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fireworks",
				'fr-fr': "Feux d’artifice",
				'de-de': "Feuerwerk"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Vulpix.",
				'fr-fr': "Lancez une pièce. Si c’est pile, défaussez une carte Énergie Fire attachée à Goupix.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" lege 1 an Vulpix angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As it develops, its single white tail gains color and splits into six. It is quite warm and cuddly."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90445,
				cardmarket: 279224
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90445,
				cardmarket: 279224
			}
		},
	],

}

export default card
