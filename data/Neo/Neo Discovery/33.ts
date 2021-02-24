import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [A]",
	},
	illustrator: "CR CG gangs",
	rarity: "Rare",
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
				en: "Anger",
			},
			effect: {
				en: "Whenever 1 of your Pokémon with Unown in its name uses its Hidden Power attack, that attack does 10 more damage for each damage counter on Unown A. If you have more than 1 Unown A in play, use only 1 Anger for each attack.",
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
