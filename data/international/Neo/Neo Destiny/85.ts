import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'de-de': "Karnimani"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
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
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Water Gun"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to Totodile but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Kaiminus en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Does 10 damage plus 10 more damage for each  Energy attached to Totodile but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its highly developed jaws are powerful enough to crush anything. Even experienced adult trainers must handle it with great caution.",
		'fr-fr': "Ses mâchoires surdéveloppées sont assez puissantes pour écraser n'importe quoi. Même les dresseurs adultes les plus expérimentés font très attention."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274737,
				tcgplayer: 89993
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274737,
				tcgplayer: 89993
			}
		}
	]
}

export default card
