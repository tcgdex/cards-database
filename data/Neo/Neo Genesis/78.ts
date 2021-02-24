import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Sunkern",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		191,
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
				en: "Growth",
			},
			effect: {
				en: "Flip a coin. If heads, you may attach up to 2 Energy cards from your hand to Sunkern.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Mega Drain",
			},
			effect: {
				en: "Remove a number of damage counters from Sunkern equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Sunkern has fewer damage counters than that, remove all of them.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
