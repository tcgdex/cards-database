import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Poliwrath",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlpool",
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 and discard it.",
			},
			damage: 40,

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
