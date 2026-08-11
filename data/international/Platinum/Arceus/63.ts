import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'de-de': "Frizelbliz"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [309],
	
	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'de-de': "Biss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Using electricity stored in its fur, it stimulates its muscles to heighten its reaction speed."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85143,
				cardmarket: 278934
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278934,
				tcgplayer: 85143
			}
		},
	],

}

export default card
