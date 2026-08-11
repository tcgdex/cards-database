import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'de-de': "Ursaring"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [217],

	hp: 100,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confront",
				'fr-fr': "Confrontation",
				'de-de': "Konfrontieren"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross Chop",
				'fr-fr': "Coup-croix",
				'de-de': "Kreuzhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "With its ability to distinguish any aroma, it unfailing finds all food buried deep underground."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90254,
				cardmarket: 279183
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90254,
				cardmarket: 279183
			}
		},
	],

}

export default card
