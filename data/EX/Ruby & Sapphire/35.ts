import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Kirlia",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		281,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ralts",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dazzle Dance",
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Confused.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Life Drain",
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out.",
			},

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
