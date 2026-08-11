import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
		'es-es': "Lilligant",
		'it-it': "Lilligant",
		'pt-br': "Lilligant",
		'de-de': "Dressella"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Aromax",
				'fr-fr': "Parfum Régénérant",
			},
			effect: {
				'en-us': "Heal all damage from 1 of your Benched Pokémon.",
				'fr-fr': "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Windmill",
				'fr-fr': "Moulin à Vent",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The fragrance of the garland on its head has a relaxing effect. It withers if a Trainer does not take good care of it.",
	},

	thirdParty: {
		cardmarket: 280128,
		tcgplayer: 86794
	}
}

export default card
