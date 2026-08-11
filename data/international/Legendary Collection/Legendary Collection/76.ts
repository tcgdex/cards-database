import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Gastly"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [92],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Lick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Energy Conversion"
			},
			effect: {
				'en-us': "Put up to 2 Energy cards from your discard pile into your hand. Gastly does 10 damage to itself."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "A mysterious Pokémon. Some say it is a lifeform from another dimension, while others believe it is formed from smog."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274841,
				tcgplayer: 85648
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85648,
				cardmarket: 274841
			}
		}
	],

	retreat: 0
}

export default card
