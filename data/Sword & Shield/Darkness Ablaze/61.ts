import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Tapu Koko",
		fr: "Tokorico"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Lightning",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Allure",
				fr: "Allure"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre"
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
