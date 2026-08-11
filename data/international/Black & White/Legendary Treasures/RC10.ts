import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Gardevoir",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kirlia",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Eternal Radiance",
			},
			effect: {
				'en-us': "Move all damage counters from this Pokémon to the Defending Pokémon. This Pokémon can't use Eternal Radiance during your next turn.",
			},

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
		'en-us': "To protect its Trainer, it will expend all its psychic power to create a small black hole.",
	},

	thirdParty: {
		cardmarket: 281135
	}
}

export default card
