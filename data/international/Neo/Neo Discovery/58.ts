import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'de-de': "Voltilamm"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse Tonnerre",
				'de-de': "Donnerrüttler"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Mareep does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, Wattouat s'inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" fügt sich Voltilamm selber 10 Schadenspunkte zu."
			},
			damage: 30,

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
		'en-us': "Its fleece grows continually. In the summer, the fleece is fully shed, but it grows back in a week.",
		'fr-fr': "Sa toison pousse constamment. En été, même tondu, sa laine repousse en moins d'une semaine."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274569,
				tcgplayer: 87192
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274569,
				tcgplayer: 87192
			}
		}
	]
}

export default card

