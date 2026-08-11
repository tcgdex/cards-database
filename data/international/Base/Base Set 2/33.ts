import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Arcanine",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Growlithe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Arcanine in order to use this attack.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
			},
			effect: {
				'en-us': "Arcanine does 30 damage to itself.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "A Pokémon that has been long admired for its beauty. It runs gracefully, as if on wings.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273956,
				tcgplayer: 42472
			}
		}
	]
}

export default card
