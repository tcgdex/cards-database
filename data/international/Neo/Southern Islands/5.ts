import { Card } from 'models/database/card'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		'en-us': "Ivysaur",
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
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
		'en-us': "Bulbasaur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Strange Scent",
			},
			effect: {
				'en-us': "Each player flips a coin. Each player who gets heads chooses a total of 3 damage counters from among his or her Pokémon and removes them. (If the player's Pokémon have fewer total damage counters than that, he or she removes all of them.)",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
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
		'en-us': "A sure sign spring is on its way is when the seed on this Pokémon's back flowers.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275635,
				tcgplayer: 46479
			}
		}
	]
}

export default card
