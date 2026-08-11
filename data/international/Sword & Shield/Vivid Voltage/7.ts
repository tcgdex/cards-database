import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [469],

	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	attacks: [
		{
			cost: [
				"Colorless",
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
			damage: 50,

		},
		{
			cost: [
				"Colorless",
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

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Stage1",

	description: {
		'en-us': "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511455,
				tcgplayer: 226368
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511455,
				tcgplayer: 226368
			}
		},
	],
}

export default card
