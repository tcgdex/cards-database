import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pika Draw",
			},
			effect: {
				'en-us': "Draw a card"
			},
		},
		{
			cost: [
				"Colorless", "Colorless",
			],
			name: {
				'en-us': "Quick Attack",
			},
			effect: {
				'en-us': "Flip a coin. If heads this attack does 20 more damage."
			},
			damage: "20+"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],

	retreat: 1,

	illustrator: "Shibuzoh.",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366772,
				tcgplayer: 180452
			}
		}
	]
}

export default card

