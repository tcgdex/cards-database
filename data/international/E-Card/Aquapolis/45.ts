import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor",
		'de-de': "Knofensa"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [69],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Blot",
				'fr-fr': "Pâté",
				'de-de': "Klecks"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Bellsprout.",
				'fr-fr': "Retirez un marqueur de dégâts sur Chétiflor.",
				'de-de': "Entferne eine Schadensmarke von Knofensa."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83804,
				cardmarket: 275117
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83804,
				cardmarket: 275117
			}
		},
	]
}

export default card
