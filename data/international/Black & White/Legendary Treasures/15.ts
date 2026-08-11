import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Virizion",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		640,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Draw",
			},
			effect: {
				'en-us': "Draw 2 cards.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Wallop",
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Leaf Wallop attack does 40 more damage (before applying Weakness and Resistance).",
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

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its head sprouts horns as sharp as blades. Using whirlwind-like movements, it confounds and swiftly cuts opponents.",
	},

	thirdParty: {
		cardmarket: 281166,
		tcgplayer: 90391
	}
}

export default card
