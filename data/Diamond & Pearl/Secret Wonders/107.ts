import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident",
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
			},
			effect: {
				en: "Discard a Water Energy attached to Shellos West Sea and remove all damage counters from Shellos West Sea.",
				fr: "Défaussez une Énergie Water attachée à Sancoki Mer Occident et retirez-lui tous ses marqueurs de dégât.",
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



}

export default card
