import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Goldeen"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [118],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Attack"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Supersonic"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
				tcgplayer: 87529,
				cardmarket: 274154
			}
		}
	]
}

export default card

