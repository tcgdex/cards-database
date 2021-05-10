import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Koffing",
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Suffocating Gas",
			},

			damage: 10,

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
