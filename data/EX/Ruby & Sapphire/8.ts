import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Hariyama",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Makuhita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Super Slap Push",
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Throw",
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-ex, this attack does 40 damage plus 40 more damage.",
			},
			damage: 40,

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
