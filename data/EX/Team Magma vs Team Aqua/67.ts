import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Rhyhorn",
	},
	illustrator: "Yosuke Da Silva",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		111,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Double Stab",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Second Strike",
			},
			effect: {
				en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 10 damage plus 20 more damage.",
			},
			damage: 10,

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
