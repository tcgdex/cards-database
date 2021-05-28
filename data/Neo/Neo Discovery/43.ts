import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Omastar",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Omanyte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Squeeze",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed. If tails, this attack does 10 damage.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Spike Barrage",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Omastar. This attack does 20 damage plus 20 more for each heads.",
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
