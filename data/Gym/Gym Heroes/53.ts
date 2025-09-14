import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Poliwhirl",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		61,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwag",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rapids",
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.",
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
				en: "Water Punch",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Misty's Poliwhirl. This attack does 30 damage plus 10 damage for each heads.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274189,
		tcgplayer: 87537
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

