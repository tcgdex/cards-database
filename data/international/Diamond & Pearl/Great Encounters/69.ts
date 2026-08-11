import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'de-de': "Hunduster"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 50,

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
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'de-de': "Glut"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to Houndour.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Malosse.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" entferne 1 -Energie, die an Hunduster angelegt ist, und lege sie auf deinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud'pattes",
				'de-de': "Schmetterkick"
			},

			damage: 20,

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
		'en-us': "It conveys its feelings using different cries. It works in a pack to cleverly take down prey.",
	},

	thirdParty: {
		cardmarket: 277971,
		tcgplayer: 86228
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
