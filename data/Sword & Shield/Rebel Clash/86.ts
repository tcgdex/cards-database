import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Milcery",
	},
	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Aromatherapy",
			},
			effect: {
				en: "Heal 10 damage from each of your Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
