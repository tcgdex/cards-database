import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Togepi",
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bawl",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
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
		'en-us': "This Pokémon is still immature. When threatened, it releases poison from its head and tries to drive its enemies away.",
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275634,
				tcgplayer: 46478
			}
		}
	]
}

export default card
