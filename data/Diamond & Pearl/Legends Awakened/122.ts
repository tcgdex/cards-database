import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		120,
	],
	hp: 50,
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
				en: "Recover",
				fr: "Soin",
			},
			effect: {
				en: "Discard an Energy attached to Staryu and remove 3 damage counters from Staryu.",
				fr: "Défaussez une Énergie attachée à Stari et retirez-lui 3 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque tournante",
			},

			damage: 20,

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
