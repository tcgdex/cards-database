import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Nidoran ♀"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [29],
	hp: 50,
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
				en: "Horn Thrust"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge"
			},
			effect: {
				en: "Giovanni's Nidoran ♀ does 20 damage to itself."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85720,
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85720
			}
		},
	],
}

export default card
