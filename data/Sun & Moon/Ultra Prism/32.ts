import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		393,
	],
	hp: 70,
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
				en: "Peck",
				fr: "Picpic",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
