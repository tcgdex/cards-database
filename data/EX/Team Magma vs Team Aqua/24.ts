import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Cacnea",
	},
	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		331,
	],
	hp: 50,
	types: [
		"Grass",
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paralyzing Gaze",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
