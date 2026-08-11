import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
		'de-de': "Sandan"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [27],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "To protect itself from attackers, it curls up into a ball. It lives in arid regions with minimal rainfall."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88925,
				cardmarket: 278815
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278815,
				tcgplayer: 88925
			}
		},
	],

}

export default card
