import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [X]",
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
				en: "[XXXXX]",
			},
			effect: {
				en: "Whenever 1 of your Pokémon with Unown in its name uses its Hidden Power attack, flip a coin until you get tails. That attack does 10 more damage for each heads. If you have more than 1 Unown X in play, use only 1 [XXXXX] per turn.",
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
