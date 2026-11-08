import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	illustrator: "Gakuji Nomoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Pikachu in order to use this attack.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Pikachu."
			},
			damage: 40,

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
		'en-us': "It uses its sensitive tail to sense its environment and has been known to react violently if its tail is grabbed.",
		'fr-fr': "Il utilise sa queue sensible pour explorer son environnement et réagit violemment si on l'attrape par la queue."
	},

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-tail"],
			thirdParty: {
				tcgplayer: 161753
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88068
			},
		}
	]
}

export default card
