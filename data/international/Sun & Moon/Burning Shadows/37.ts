import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Simipour",
		'fr-fr': "Flotoutan",
		'es-es': "Simipour",
		'it-it': "Simipour",
		'pt-br': "Simipour",
		'de-de': "Sodachita"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		516,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Reflect",
				'fr-fr': "Reflet Aquatique",
				'es-es': "Reflejo Agua",
				'it-it': "Acquaspecchio",
				'pt-br': "Água Refletora",
				'de-de': "Aquareflektor"
			},
			effect: {
				'en-us': "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie Water de ce Pokémon vers l’un de vos Pokémon de Banc.",
				'es-es': "Mueve 1 Energía Water de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta un’Energia Water da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova 1 Energia Water deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 1 Water-Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The high-pressure water expelled from its tail is so powerful, it can destroy a concrete wall.",
	},

	thirdParty: {
		cardmarket: 299442,
		tcgplayer: 138517
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
