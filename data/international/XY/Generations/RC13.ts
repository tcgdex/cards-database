import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Jirachi",
		'fr-fr': "Jirachi",
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Wish",
				'fr-fr': "Vœu",
			},
			effect: {
				'en-us': "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heart Sign",
				'fr-fr': "Signe de Cœur",
			},

			damage: 50,

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
		'en-us': "The twinkle of the stars. The destiny of love. A miracle that grants wishes in the night sky.",
	},

	thirdParty: {
		cardmarket: 288522
	}
}

export default card
