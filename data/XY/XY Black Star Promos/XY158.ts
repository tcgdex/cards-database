import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Beedrill EX",
		fr: "M-Dardargnan EX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 200,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Beedrill-EX",
		fr: "Dardargnan-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Hazard Stinger",
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed and Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	suffix: "EX",
	retreat: 0
}

export default card
