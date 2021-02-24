import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dreepy",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
