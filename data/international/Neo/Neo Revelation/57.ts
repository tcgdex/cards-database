import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'de-de': "Quiekel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Take Down"
			},
			effect: {
				'en-us': "Swinub does 10 damage to itself.",
				'fr-fr': "Marcacrin s'inflige 30 dégâts.",
				'de-de': "Swinub does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "If it smells something enticing, it dashes headlong off to find the source of the aroma.",
		'fr-fr': "S'il sent quelque chose d'alléchant, il se précipite vers la source de l'arôme."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274643,
				tcgplayer: 89697
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274643,
				tcgplayer: 89697
			}
		}
	]
}

export default card

