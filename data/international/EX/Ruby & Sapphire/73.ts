import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'de-de': "Flemmli"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [255],

	hp: 40,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fireworks",
				'fr-fr': "Feu d'artifice",
				'de-de': "Feuerwerk"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy card attached to Torchic.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une carte Énergie  attachée à Poussifeu.",
				'de-de': "Wirf eine Münze. Entferne bei \"Zahl\" eine -Energiekarte von Flemmli."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275721,
				tcgplayer: 89949
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275721,
				tcgplayer: 89949
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125110
			}
		}
	],

}

export default card
