import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Raticate"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [20],

	hp: 60,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Rattata"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Fang"
			},
			effect: {
				'en-us': "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10)."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It uses its whiskers to maintain its balance. It seems to slow down if they are cut off."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274826,
				tcgplayer: 88601
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88601,
				cardmarket: 274826
			}
		}
	],

}

export default card
