import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'es-es': "Hitmonchan",
		'it-it': "Hitmonchan",
		'pt-br': "Hitmonchan",
		'de-de': "Nockchan"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Hit and Run",
				'fr-fr': "Frappe et Fuite",
				'es-es': "Atropello y Fuga",
				'it-it': "Colpisci e Fuggi",
				'pt-br': "Bater e Fugir",
				'de-de': "Fluchtschlag"
			},
			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnum Punch",
				'fr-fr': "Poing Magnum",
				'es-es': "Puño Magnum",
				'it-it': "Superpugno",
				'pt-br': "Soco Magnum",
				'de-de': "Magnum-Schlag"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The arm-twisting punches it throws pulverize even concrete. It rests after three minutes of fighting.",
	},

	thirdParty: {
		cardmarket: 369004,
		tcgplayer: 183852
	}
}

export default card
