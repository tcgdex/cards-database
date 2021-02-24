import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Smeargle",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		235,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paint Trick",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. Then, choose 1 of your Benched Pokémon and switch Smeargle with it.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doubleslap",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
