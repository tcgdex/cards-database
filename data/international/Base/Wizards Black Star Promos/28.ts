import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Surfing Pikachu",
		'fr-fr': "Pikachu surfeur"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "One summer, a group of Pikachus was found riding the waves at the local beach.",
		'fr-fr': "L'été, on aperçoit souvent des bandes de Pikachu surfant sur les vagues."
	},

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-tail"],
			thirdParty: {
				tcgplayer: 161754
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89643
			},
		}
	]
}

export default card
