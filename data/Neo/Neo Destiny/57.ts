import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [C]",
	},
	illustrator: "CR CG gangs",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "[Chase]",
			},
			effect: {
				en: "As long as Unown C is your Active Pokémon, whenever your opponent's Active Pokémon tries to retreat, flip a coin. If heads, put 1 damage counter on that Pokémon. Apply Weakness and Resistance.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
