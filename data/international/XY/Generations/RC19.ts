import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		684,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Lick Away",
				'fr-fr': "Lèche-Lèche",
			},
			effect: {
				'en-us': "Remove all Special Conditions from this Pokémon.",
				'fr-fr': "Retirez tous les États Spéciaux de ce Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 20,

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

	retreat: 1,

	description: {
		'en-us': "My fluffy heart makes me feel like a marshmallow. A thrilling macaron full of colorful magic. Everybody's crazy about the taste of candy! ☆",
	},

	thirdParty: {
		cardmarket: 288528
	}
}

export default card
