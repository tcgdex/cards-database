import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Farfetch’d",
		'fr-fr': "Canarticho",
	},
	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		83,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leek Slap",
				'fr-fr': "Coup d’Oignon",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "The plant stalk it holds is its weapon. The stalk is used like a sword to cut all sorts of things.",
	},
}

export default card
