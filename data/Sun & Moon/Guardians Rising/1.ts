import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Bellsprout",
		fr: "Chétiflor",
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		69,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
