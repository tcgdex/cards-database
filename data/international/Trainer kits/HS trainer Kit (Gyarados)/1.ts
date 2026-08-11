import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		'en-us': "Totodile",
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [158],
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Gnaw",
			},
			damage: 10,
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279125,
				tcgplayer: 90001,
			},
		},
	],

}

export default card
