import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Rhyhorn",
		'fr-fr': "Rhinocorne de Team Magma",
		'de-de': "Team Magmas Rihorn"
	},

	illustrator: "Yosuke Da Silva",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [111],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ram"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Knock Over",
				'fr-fr': "Culbute",
				'de-de': "Knock Over"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
				'de-de': "You may discard any Stadium card in play."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275845,
				tcgplayer: 89844
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275845,
				tcgplayer: 89844
			}
		},
	],

}

export default card
