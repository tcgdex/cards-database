import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Grimer",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		88,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Spurt",
			},
			effect: {
				en: "Discard a Grass Energy card attached to Grimer. The Defending Pokémon is now Poisoned.",
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
