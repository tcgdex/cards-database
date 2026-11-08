import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Marine Guidance",
				'fr-fr': "Guide Maritime",
			},
			effect: {
				'en-us': "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aqua Ring",
				'fr-fr': "Anneau Hydro",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
			},
			damage: 30,

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
		'en-us': "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon.",
	},

	thirdParty: {
		cardmarket: 291576
	}
}

export default card
