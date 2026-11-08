import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à ce Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Found near the mouth of a volcano. This fire-breather's body temperature is nearly 2,200 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 288456,
		tcgplayer: 113674
	}
}

export default card
