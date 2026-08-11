import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Starmie",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Staryu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Recover",
			},
			effect: {
				'en-us': "Discard 1 Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Star Freeze",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its central core glows with the seven colors of the rainbow. Some people value this core as a gem.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274017,
				tcgplayer: 42545
			}
		}
	]
}

export default card
