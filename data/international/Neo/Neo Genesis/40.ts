import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud'keu",
				'de-de': "Schweifschlag"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Magma Punch",
				'fr-fr': "Poing magma",
				'de-de': "Magmahieb"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It dislikes cold places, so it blows scorching flames to make the environment suitable for itself.",
		'fr-fr': "Il n'aime pas les endroits froids, il souffle donc des flammes ardentes pour rendre l'atmosphère plus agréable à son goût."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274440,
				tcgplayer: 87042
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274440,
				tcgplayer: 87042
			}
		}
	]
}

export default card
