import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Shinx",
	},
	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Under Pressure",
			},
			effect: {
				en: "If your opponent has 3 or fewer Prize cards remaining, this attack does 50 more damage.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
