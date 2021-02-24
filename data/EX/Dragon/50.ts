import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Bagon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		371,
	],
	hp: 50,
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
				en: "Risky Kick",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
			],
			name: {
				en: "Dragon Eye",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 20,

		},
	],






}

export default card
