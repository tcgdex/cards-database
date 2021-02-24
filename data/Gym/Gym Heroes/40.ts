import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Graveler",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		75,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Geodude",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Toss",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
