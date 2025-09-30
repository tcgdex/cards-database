import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident",
		de: "Schalellos Westliches Meer"
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
				en: "Mud Spatter",
				fr: "Éclaboussure de boue",
				de: "Lehmspritzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				de: "Erholung"
			},
			effect: {
				en: "Discard a Water Energy attached to Shellos West Sea and remove all damage counters from Shellos West Sea.",
				fr: "Défaussez une Énergie Water attachée à Sancoki Mer Occident et retirez-lui tous ses marqueurs de dégât.",
				de: "Lege 1 an Schalellos Westliches Meer angelegte -Energie auf deinen Ablagestapel und entferne alle Schadensmarken von Schalellos Westliches Meer."
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
