import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'de-de': "Panflam"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'de-de': "Glut"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Chimchar.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Ouisticram.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" lege eine -Energie, die an Panflam angelegt ist, auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps.",
		'fr-fr': "Il escalade prestement les falaises escarpées et vit sur les sommets. Sa flamme s'éteint quand il dort."
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
