import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Empoleon",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Prinplup",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Emperor's Strike",
			},
			effect: {
				'en-us': "If this Pokémon has fewer remaining HP than the Defending Pokémon, this attack does 60 more damage.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If anyone were to hurt its pride, it would slash them with wings that can cleave through an ice floe.",
	},

	thirdParty: {
		cardmarket: 281186,
		tcgplayer: 85204
	}
}

export default card
