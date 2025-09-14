import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Nidoqueen",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorina",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mega Kick",
			},

			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Love Lariat",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 50 more damage if you have at least 1 Giovanni's Nidoking on your Bench. If tails, this attack does nothing.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274291,
		tcgplayer: 85719
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
	]
}

export default card
