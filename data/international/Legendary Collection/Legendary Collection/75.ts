import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Exeggcute"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [102],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hypnosis"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Leech Seed"
			},
			effect: {
				'en-us': "Unless all damage from this attack is prevented, you may remove 1 damage counter from Exeggcute."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms."
	},

	thirdParty: {
		cardmarket: 274840,
		tcgplayer: 85343
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85343
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85343
			}
		},
		{
			type: "reverse",
			subtype: "shifted-energy-cost",
		}
	]
}

export default card
