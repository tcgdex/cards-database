import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Kabutops"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [141],

	hp: 60,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Kabuto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Sharp Sickle"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Absorb"
			},
			effect: {
				'en-us': "Remove a number of damage counters from Kabutops equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Kabutops has fewer damage counters than that, remove all of them."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274792,
				tcgplayer: 86395
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86395,
				cardmarket: 274792
			}
		}
	],

}

export default card
