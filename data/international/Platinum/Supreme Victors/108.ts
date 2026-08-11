import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'de-de': "Fukano"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud'pattes",
				'de-de': "Schmetterkick"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fireworks",
				'fr-fr': "Feux d'artifices",
				'de-de': "Feuerwerk"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Growlithe.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Caninos.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" entferne 1 -Energie, die an Fukano angelegt ist, und lege sie auf deinen Ablagestapel."
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
		'en-us': "A Pokémon with a loyal nature. It will remain motionless until it is given an order by its Trainer."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85959,
				cardmarket: 278799
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278799,
				tcgplayer: 85959
			}
		},
	],

}

export default card
