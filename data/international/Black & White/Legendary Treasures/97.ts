import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Deino",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		633,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Deep Growl",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Power Breath",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It tends to bite everything, and it is not a picky eater. Approaching it carelessly is dangerous.",
	},

	thirdParty: {
		cardmarket: 281248,
		tcgplayer: 84733
	}
}

export default card
