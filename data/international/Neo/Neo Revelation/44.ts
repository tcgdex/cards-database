import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'de-de': "Kleinstein"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		74,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Knuckle Punch",
				'fr-fr': "Coud'phalange",
				'de-de': "Knochenhieb"
			},

			damage: 20,

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
		'en-us': "It uses its arms to steadily climb steep mountain paths. It swings its fists around if angered.",
		'fr-fr': "Il s'aide de ses bras pour gravir les pentes des montagnes les plus raides. Il fait tourner ses poings s'il est en colère."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274630,
				tcgplayer: 85683
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274630,
				tcgplayer: 85683
			}
		}
	]
}

export default card

