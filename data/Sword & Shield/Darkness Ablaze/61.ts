import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [785],

	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
		es: "Tapu Koko",
		it: "Tapu Koko",
		pt: "Tapu Koko",
		de: "Kapu-Riki"
	},

	illustrator: "Hasuno",
	rarity: "Holo Rare",
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
				fr: "Piochez 2 cartes.",
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
	retreat: 0,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "The lightning-wielding guardian deity of Melemele, Tapu Koko is brimming with curiosity and appears before people from time to time."
	},

	thirdParty: {
		cardmarket: 483179
	}
}

export default card
