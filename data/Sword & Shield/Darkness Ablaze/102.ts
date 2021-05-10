import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Spinarak",
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Hang Down",
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Sting",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
