import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'de-de': "Schiggy"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [7],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie éclaboussante",
				'de-de': "Regenplatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Shell Attack",
				'fr-fr': "Coquill-attaque",
				'de-de': "Muschelangriff"
			},

			damage: 40,

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
		'en-us': "The shell is soft when it is born. It soon becomes so resilient, prodding fingers will bounce off it."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89496,
				cardmarket: 279219
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89496,
				cardmarket: 279219
			}
		},
	],

}

export default card
