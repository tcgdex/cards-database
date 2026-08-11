import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Marowak",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Cubone",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Bonemerang",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Call for Friend",
			},
			effect: {
				'en-us': "Search your deck for a Fighting Basic Pokémon card and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to K.O. targets.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273975,
				tcgplayer: 42515
			}
		}
	]
}

export default card
