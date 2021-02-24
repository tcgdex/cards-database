import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Kingler",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		99,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Krabby",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Giant Claw",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
