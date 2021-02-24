import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Electrode",
	},
	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Voltorb",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Orb Collector",
			},
			effect: {
				en: "Search your deck for up to 3 Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
