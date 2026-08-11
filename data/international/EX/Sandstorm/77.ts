import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'de-de': "Samurzel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [273],

	hp: 40,

	types: [
		"Grass"
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
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275854,
				tcgplayer: 89037
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275854,
				tcgplayer: 89037
			}
		},
	],

}

export default card
