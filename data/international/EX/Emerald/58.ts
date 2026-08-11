import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'de-de': "Camaub"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Sauve qui peut",
				'de-de': "Stampede"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Steady Firebreathing",
				'fr-fr': "Crachage de feu régulier",
				'de-de': "Steady Firebreathing"
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

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 87811,
		cardmarket: 276569
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87811,
				cardmarket: 276569
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87811,
				cardmarket: 276569
			},
		}
	],
}

export default card
