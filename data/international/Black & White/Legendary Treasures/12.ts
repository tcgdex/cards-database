import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Leavanny",
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Swadloon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Leaf Tailor",
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Energy attached to it has no Weakness.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Arm",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Upon finding a small Pokémon, it weaves clothing for it from leaves, using the cutters on its arms and sticky silk.",
	},

	thirdParty: {
		cardmarket: 281163,
		tcgplayer: 86689
	}
}

export default card
