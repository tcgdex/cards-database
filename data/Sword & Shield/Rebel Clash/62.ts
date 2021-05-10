import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Luxray",
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Luxio",
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Raid",
			},
			effect: {
				en: "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage.",
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
			},

			damage: 120,

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
