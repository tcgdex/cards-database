import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Meloetta",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		648,
	],

	hp: 80,

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
				'en-us': "Psychic",
			},
			effect: {
				'en-us': "Does 20 more damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Echoed Voice",
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
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
		'en-us': "The melodies sung by Meloetta have the power to make Pokémon that hear them happy or sad.",
	},

	thirdParty: {
		cardmarket: 281134,
		tcgplayer: 87302
	}
}

export default card
