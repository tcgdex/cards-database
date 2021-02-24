import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},
	illustrator: "Hasegawa Saki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

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
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 10,

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
