import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fiery Dance",
				'fr-fr': "Danse du Feu",
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à 1 de vos Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Wave",
				'fr-fr': "Canicule",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When volcanic ash darkened the atmosphere, it is said that Volcarona's fire provided a replacement for the sun.",
	},

	thirdParty: {
		cardmarket: 280144,
		tcgplayer: 90402
	}
}

export default card
