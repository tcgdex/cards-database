import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [77],
	
	hp: 60,

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
				'en-us': "Tackle",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Stomp",
				'de-de': "Stampfer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As a newborn, it can barely stand. However, through galloping, its legs are made tougher and faster."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88290,
				cardmarket: 278869
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278869,
				tcgplayer: 88290
			}
		},
	],

}

export default card
