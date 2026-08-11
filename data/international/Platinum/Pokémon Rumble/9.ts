import { Card } from 'models/database/card'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		'en-us': "Mewtwo"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [150],

	hp: 100,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Super Psy Bolt"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278850,
				tcgplayer: 87423
			},
		}
	]
}

export default card
