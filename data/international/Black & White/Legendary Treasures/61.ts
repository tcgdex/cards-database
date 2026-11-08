import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Sableye",
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
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
				"Colorless",
			],
			name: {
				'en-us': "Tight Jaw",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 30,

		},
	],

	retreat: 1,

	description: {
		'en-us': "It hides in the darkness of caves. Its diet of gems has transformed its eyes into gemstones.",
	},

	thirdParty: {
		cardmarket: 281212,
		tcgplayer: 88856
	}
}

export default card
