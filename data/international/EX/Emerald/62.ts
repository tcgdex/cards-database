import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'de-de': "Rihorn"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud'korne",
				'de-de': "Horn Attack"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal'korne",
				'de-de': "Horn Drill"
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

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 88741,
		cardmarket: 276573
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88741,
				cardmarket: 276573
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 88741,
				cardmarket: 276573
			},
		}
	],
}

export default card
