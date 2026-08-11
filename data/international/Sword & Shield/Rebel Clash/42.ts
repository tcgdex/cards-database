import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [279],

	name: {
		'en-us': "Pelipper",
		'fr-fr': "Bekipan",
		'es-es': "Pelipper",
		'it-it': "Pelipper",
		'pt-br': "Pelipper",
		'de-de': "Pelipper"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise",
		'es-es': "Wingull",
		'it-it': "Wingull",
		'pt-br': "Wingull",
		'de-de': "Wingull"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Ailes",
				'es-es': "Ataque Ala",
				'it-it': "Attacco d'Ala",
				'pt-br': "Ataque de Asa",
				'de-de': "Flügelschlag"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Cyclone",
				'fr-fr': "Cyclone d'Énergie",
				'es-es': "Ciclón Poderoso",
				'it-it': "Ciclone Potente",
				'pt-br': "Ciclone Poderoso",
				'de-de': "Kraftwirbel"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
				'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Water"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It is a messenger of the skies, carrying small Pokémon and eggs to safety in its bill."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457653,
				tcgplayer: 213120
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457653,
				tcgplayer: 213120
			}
		},
	],
}

export default card
