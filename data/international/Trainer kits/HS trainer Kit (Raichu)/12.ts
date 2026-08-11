import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		'en-us': "Meowth",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [52],
	hp: 60,
	types: [
		"Colorless",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pay Day",
			},
			effect: {
				'en-us': "Draw a card.",
			},
			damage: 10,
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dig Claws",
			},
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279106,
				tcgplayer: 87324,
			},
		},
	],

}

export default card
