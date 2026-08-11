import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [129],

	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	illustrator: "kanahei",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leap Out",
				'fr-fr': "Bondir",
				'es-es': "Saltar del Agua",
				'it-it': "Sguizzata",
				'pt-br': "Pular Fora",
				'de-de': "Herausspringen"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 30,
	types: ["Water"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457638,
				tcgplayer: 213117
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457638,
				tcgplayer: 213117
			}
		},
	],
}

export default card
