import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Grand Loop",
				'fr-fr': "Grande Boucle",
				'es-es': "Gran Bucle",
				'it-it': "Granvirata",
				'pt-br': "Grande Volta",
				'de-de': "Großartiger Looping"
			},
			effect: {
				'en-us': "Draw 3 cards. You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Piochez 3 cartes. Vous pouvez échanger ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Roba 3 cartas. Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Pesca tre carte. Puoi scambiare questo Pokémon con uno della tua panchina.",
				'pt-br': "Compre 3 cards. Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Ziehe 3 Karten. Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Brave Bird",
				'fr-fr': "Rapace",
				'es-es': "Pájaro Osado",
				'it-it': "Baldeali",
				'pt-br': "Pássaro Bravo",
				'de-de': "Sturzflug"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Este Pokémon causa 20 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When attacking prey, it can reach speeds of up to 310 mph. It finishes its prey off with a colossal kick.",
	},

	thirdParty: {
		cardmarket: 282683,
		tcgplayer: 98051
	}
}

export default card
