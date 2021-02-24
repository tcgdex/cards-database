import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [D]",
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
				en: "Darkness",
			},
			effect: {
				en: "Whenever a D Pokémon damages 1 of your Pokémon, reduce that damage by 30 (after applying Weakness and Resistance). This power stops working if you have more than 1 Unown D in play. (This power even works if Unown D is Asleep, Confused, or Paralyzed.)",
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
