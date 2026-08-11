import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Gallade",
		'fr-fr': "Gallame",
		'es-es': "Gallade",
		'it-it': "Gallade",
		'pt-br': "Gallade",
		'de-de': "Galagladi"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Double Type",
				'fr-fr': "Type Double",
				'es-es': "Doble Tipo",
				'it-it': "Doppio Tipo",
				'pt-br': "Tipo Duplo",
				'de-de': "Doppeltyp"
			},
			effect: {
				'en-us': "As long as this Pokémon is in play, it is Psychic and Fighting type.",
				'fr-fr': "Tant que ce Pokémon est en jeu, il est de type Psychic et Fighting.",
				'es-es': "Mientras este Pokémon esté en juego, es de tipo Psychic y Fighting.",
				'it-it': "Fintanto che questo Pokémon è in gioco, è di tipo Psychic e Fighting.",
				'pt-br': "Enquanto este Pokémon estiver em jogo, é do tipo Psychic e Fighting.",
				'de-de': "Solang dieses Pokémon im Spiel ist, ist es vom Typ Psychic und Fighting."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Cyclone",
				'fr-fr': "Cyclone d’Énergie",
				'es-es': "Ciclón Poderoso",
				'it-it': "Ciclone Potente",
				'pt-br': "Ciclone Poderoso",
				'de-de': "Kraftwirbel"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
				'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta un’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Because it can sense what its foe is thinking, its attacks burst out first, fast, and fierce.",
	},

	thirdParty: {
		cardmarket: 398549,
		tcgplayer: 201257
	}
}

export default card
