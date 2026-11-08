import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Magikarp",
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flailing Flop",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Magikarp living for many years can leap a mountain using Splash. The move remains useless, though.",
	},

	thirdParty: {
		cardmarket: 281181,
		tcgplayer: 87037
	}
}

export default card
