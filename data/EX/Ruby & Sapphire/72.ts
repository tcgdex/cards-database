import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Taillow",
		fr: "Nirondelle"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		276,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-aile"
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
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
