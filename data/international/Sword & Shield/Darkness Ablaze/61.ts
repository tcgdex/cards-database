import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [785],

	name: {
		'en-us': "Tapu Koko",
		'fr-fr': "Tokorico",
		'es-es': "Tapu Koko",
		'it-it': "Tapu Koko",
		'pt-br': "Tapu Koko",
		'de-de': "Kapu-Riki"
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
				'en-us': "Allure",
				'fr-fr': "Allure",
				'es-es': "Atractivo",
				'it-it': "Affascinante",
				'pt-br': "Fascinar",
				'de-de': "Verlockung"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electric Ball",
				'fr-fr': "Boule de Foudre",
				'es-es': "Bola Eléctrica",
				'it-it': "Lamposfera",
				'pt-br': "Bola de Eletricidade",
				'de-de': "Stromball"
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


	stage: "Basic",

	description: {
		'en-us': "The lightning-wielding guardian deity of Melemele, Tapu Koko is brimming with curiosity and appears before people from time to time."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483179,
				tcgplayer: 219413
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483179,
				tcgplayer: 219413
			}
		},
	],
}

export default card
