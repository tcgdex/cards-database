import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Ivysaur",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Barboach",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vine Whip",
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poisonpowder",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
			},
			damage: 30,

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
		'en-us': "When the bulb on its back grows large, the Pokémon seems to lose the ability to stand on its hind legs.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273967,
				tcgplayer: 42507
			}
		}
	]
}

export default card
