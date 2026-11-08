import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'de-de': "Kleinstein"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [74],

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
				'en-us': "Rock Hurl",
				'fr-fr': "Lance-pierre",
				'de-de': "Steinschleuderer"
			},
			effect: {
				'en-us': "Don't apply Resistance.",
				'fr-fr': "N'appliquez pas la Résistance.",
				'de-de': "Wende Resistenz nicht an."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85686,
				cardmarket: 274985
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85686,
				cardmarket: 274985
			},
		},
	],
}

export default card
