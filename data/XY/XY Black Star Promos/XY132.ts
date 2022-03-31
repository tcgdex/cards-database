import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Gastly",
	},

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Poison",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.",
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1
}

export default card
