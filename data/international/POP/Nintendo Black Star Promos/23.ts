import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Metang",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		375,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		'en-us': "Beldum",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Metal Load",
			},
			effect: {
				'en-us': "Search your discard pile for a Metal Energy card and attach it to Metang.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	variants: [
		{
			type: 'normal',
			stamp: ['stadium-challenge'],
			thirdParty: {
				tcgplayer: 87374
			}
		}
	]
}

export default card
