import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Vibrava",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		329,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Trapinch",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragonbreath",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
