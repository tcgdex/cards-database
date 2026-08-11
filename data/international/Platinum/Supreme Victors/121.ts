import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
		'de-de': "Plinfa"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [393],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'face",
				'de-de': "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surfer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "A poor walker, it often falls down. However, its strong pride makes it puff up its chest without a care."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88151,
				cardmarket: 278812
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278812,
				tcgplayer: 88151
			}
		},
	],

}

export default card
