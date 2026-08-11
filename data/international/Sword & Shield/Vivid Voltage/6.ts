import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [193],

	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "U-turn",
				'fr-fr': "Demi-Tour",
				'es-es': "Ida y Vuelta",
				'it-it': "Retromarcia",
				'pt-br': "Fazer Retorno",
				'de-de': "Kehrtwende"
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Wind",
				'fr-fr': "Vent Glacial",
				'es-es': "Viento Helado",
				'it-it': "Vento Tagliente",
				'pt-br': "Vento Dilacerante",
				'de-de': "Schneidender Wind"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511450,
				tcgplayer: 226366
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511450,
				tcgplayer: 226366
			}
		},
	],
}

export default card
