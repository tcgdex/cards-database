import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Tentacool"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [72],

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
				en: "Mysterious Light"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Jellyfish Pod"
			},
			effect: {
				en: "Search your deck for any number of Pokémon named Tentacool, Tentacruel, Misty's Tentacool, and/or Misty's Tentacruel. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87550,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87550,
				cardmarket: 274168
			}
		}
	],
	retreat: 0
}

export default card

