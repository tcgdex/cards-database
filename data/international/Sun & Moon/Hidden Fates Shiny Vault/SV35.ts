import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		281,
	],
	hp: 80,
	types: [
		"Fairy",
	],
	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
			},

			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "The cheerful spirit of its Trainer gives it energy for its psychokinetic power. It spins and dances when happy.",
	},
}

export default card
