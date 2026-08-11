import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'de-de': "Maschock"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [67],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud'poing",
				'de-de': "Hieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mega Kick",
				'fr-fr': "Ultimawashi",
				'de-de': "Megakick"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86977,
				cardmarket: 274960
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86977,
				cardmarket: 274960
			},
		},
	],
}

export default card
