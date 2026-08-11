import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Dratini"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [147],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound"
			},

			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Long considered a mythical Pokémon until recently, when a small colony was found living underwater."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274837,
				tcgplayer: 84930
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84930,
				cardmarket: 274837
			}
		}
	],

}

export default card
