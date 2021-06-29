import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
		es: "Tapu Koko",
		it: "Tapu Koko",
		pt: "Tapu Koko",
		de: "Kapu-Riki"
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
				fr: "Allure",
				es: "Atractivo",
				it: "Affascinante",
				pt: "Fascinar",
				de: "Verlockung"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
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
				fr: "Boule de Foudre",
				es: "Bola Eléctrica",
				it: "Lamposfera",
				pt: "Bola de Eletricidade",
				de: "Stromball"
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

	regulationMark: "D",
	retreat: 0
}

export default card
