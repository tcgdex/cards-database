import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'de-de': "Quiekel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [220],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d’boule",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Ball",
				'fr-fr': "Ball’glace",
				'de-de': "Eisball"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It rubs its snout on the ground to find and dig up food. It sometimes discovers hot springs."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89705,
				cardmarket: 279609
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279609,
				tcgplayer: 89705
			}
		},
	],

}

export default card
