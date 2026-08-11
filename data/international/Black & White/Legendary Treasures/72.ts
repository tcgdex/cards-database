import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Gothitelle",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		576,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothorita",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magic Room",
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Item cards from his or her hand.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Madkinesis",
			},
			effect: {
				'en-us': "Does 20 more damage for each Psychic Energy attached to this Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Starry skies thousands of light-years away are visible in the space distorted by their intense psychic power.",
	},

	thirdParty: {
		cardmarket: 281223,
		tcgplayer: 85854
	}
}

export default card
