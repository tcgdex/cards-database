import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [134],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O"
			},
			effect: {
				'en-us': "Does 30 damage plus 20 more damage for each Water Energy attached to Vaporeon but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				'fr-fr': "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Aquali en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90283,
				cardmarket: 277454
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90283,
				cardmarket: 277454
			},
		},
	],

}

export default card
