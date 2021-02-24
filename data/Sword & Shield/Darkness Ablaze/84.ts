import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Diglett",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 50,
	types: [
		"Fightning",
	],




	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Scratch",
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
