import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Vibrava δ",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		329,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Trapinch",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Sonic Noise",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, that Pokémon is now Confused.",
			},
			damage: 30,

		},
	],






}

export default card
