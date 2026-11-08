import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Shellos West Sea",
		'fr-fr': "Sancoki Mer Occident",
		'de-de': "Schalellos Westliches Meer"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		422,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mud Spatter",
				'fr-fr': "Éclaboussure de boue",
				'de-de': "Lehmspritzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Erholung"
			},
			effect: {
				'en-us': "Discard a Water Energy attached to Shellos West Sea and remove all damage counters from Shellos West Sea.",
				'fr-fr': "Défaussez une Énergie Water attachée à Sancoki Mer Occident et retirez-lui tous ses marqueurs de dégât.",
				'de-de': "Lege 1 an Schalellos Westliches Meer angelegte -Energie auf deinen Ablagestapel und entferne alle Schadensmarken von Schalellos Westliches Meer."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its colors and shapes differ from region to region. In the Sinnoh region, two types are confirmed.",
	},

	thirdParty: {
		cardmarket: 277860,
		tcgplayer: 89144
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["comic-con"]
		},
		{
			type: "normal",
			stamp: ["comic-con","staff"]
		}
	]
}

export default card
