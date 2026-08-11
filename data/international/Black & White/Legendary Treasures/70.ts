import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Gothita",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		574,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trip Over",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			},
			damage: 10,

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
		'en-us': "It stares intently at everything. It can become so obsessed with watching that it doesn't notice attacks.",
	},

	thirdParty: {
		cardmarket: 281220,
		tcgplayer: 85850
	}
}

export default card
