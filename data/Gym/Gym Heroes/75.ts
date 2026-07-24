import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Bellsprout"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [69],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Vine"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Vine Whip"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85284,
				cardmarket: 274211
			}
		}
	]
}

export default card

