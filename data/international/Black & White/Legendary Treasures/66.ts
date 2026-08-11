import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Sigilyph",
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		561,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Safeguard",
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
			},
			effect: {
				'en-us': "Does 10 more damage for each Energy attached to the Defending Pokémon.",
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
		'en-us': "The guardians of an ancient city, they use their psychic power to attack enemies that invade their territory.",
	},

	thirdParty: {
		cardmarket: 281217,
		tcgplayer: 89209
	}
}

export default card
