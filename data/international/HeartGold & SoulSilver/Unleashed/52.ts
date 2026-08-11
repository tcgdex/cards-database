import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [126],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Live Coal",
				'fr-fr': "Charbon mutant",
				'de-de': "Glühende Kohlen"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Magma Punch",
				'fr-fr': "Poing magma",
				'de-de': "Magmahieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It dislikes cold places, so it blows scorching flames to make the environment suitable for itself."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87050,
				cardmarket: 279208
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87050,
				cardmarket: 279208
			}
		},
	],

}

export default card
