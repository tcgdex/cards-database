import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Gible",
		fr: "Griknot",
	},
	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		443,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
