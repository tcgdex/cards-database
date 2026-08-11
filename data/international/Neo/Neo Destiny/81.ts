import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'de-de': "Jurob"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Take Down"
			},
			effect: {
				'en-us': "Seel does 10 damage to itself.",
				'fr-fr': "Otaria s'inflige 10 dégâts.",
				'de-de': "Seel does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Although clumsy on land, it moves easily through the arctic waters it calls home.",
		'fr-fr': "Bien que peu doué pour marcher sur la terre ferme, il se déplace avec aisance dans ses eaux natales de l'Arctique."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274733,
				tcgplayer: 89048
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274733,
				tcgplayer: 89048
			}
		}
	]
}

export default card
