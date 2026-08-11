import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu Niv. 12",
		'de-de': "Pikachu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 40,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'de-de': "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse tonnerre",
				'de-de': "Donnerrüttler"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Pikachu does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Pikachu s'inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" fügt Pikachu sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278686,
				tcgplayer: 88091
			}
		},
	],

}

export default card
