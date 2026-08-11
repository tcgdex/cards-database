import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		'en-us': "Magikarp",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [129],
	hp: 30,
	types: [
		"Water",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Splash",
			},
			damage: 10,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279106,
				tcgplayer: 87033,
			},
		},
	],

}

export default card
