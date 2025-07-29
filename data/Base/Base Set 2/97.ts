import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Venonat",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Life",
			},
			effect: {
				en: "Remove a number of damage counters from Venonat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance).",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274020
	}
}

export default card
