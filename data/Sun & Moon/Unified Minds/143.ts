import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Cottonee",
		fr: "Doudouvet",
	},
	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		546,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dust Gathering",
				fr: "Ramasse Poussière",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
