import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Light Steps",
				'fr-fr': "Pas Légers",
				'es-es': "Pasos Ligeros",
				'it-it': "Passetto",
				'pt-br': "Passos Quietos",
				'de-de': "Auf leisen Sohlen"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
				'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 1 an dieses Pokémon angelegte Energie auf 1 Pokémon auf deiner Bank."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.",
	},

	thirdParty: {
		cardmarket: 289892,
		tcgplayer: 117846
	}
}

export default card
