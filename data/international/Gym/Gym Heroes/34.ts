import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Sabrina's Venomoth"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [49],

	hp: 60,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Venonat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Healing Pollen"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, remove 1 damage counter from each of your Pokémon. If a Pokémon has fewer damage counters than the number of heads, remove all of them."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sonic Distortion"
			},
			effect: {
				'en-us': "Flip 2 coins. If 1 or both of them are heads, the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88890,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88890,
				cardmarket: 274170
			}
		}
	],
	retreat: 0
}

export default card

