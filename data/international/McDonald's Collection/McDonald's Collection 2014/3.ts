import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		653,
	],
	illustrator: "5ban Graphics",
	set: Set,
	description: {
		'en-us': "Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit."
	},
	name: {
		'en-us': "Fennekin",
		'fr-fr': "Feunnec",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fire",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
			},
			damage: "10",
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Live Coal",
				'fr-fr': "Charbon Mutant",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [

	],
	retreat: 1,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281655,
				tcgplayer: 110408
			}
		}
	]
}

export default card

