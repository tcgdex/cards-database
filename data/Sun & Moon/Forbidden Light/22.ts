import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		656,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
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
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
