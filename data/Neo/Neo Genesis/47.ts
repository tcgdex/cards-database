import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Quilava",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		156,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cyndaquil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Smokescreen",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Char",
			},
			effect: {
				en: "If the Defending Pokémon doesn't have a Char counter on it, flip a coin. If heads, put a Char counter on it. A Char counter requires your opponent to flip a coin after every turn. If tails, put 2 damage counters on the Pokémon with that Char counter. (Char counters stay on the Pokémon as long as it's in play.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
