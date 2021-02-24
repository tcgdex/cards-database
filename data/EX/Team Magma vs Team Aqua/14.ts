import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Crawdaunt",
	},
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Poison Reaction",
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Claw",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
			},
			damage: 30,

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
