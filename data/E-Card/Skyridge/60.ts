import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Golbat",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		42,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Zubat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Sound Wave",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Poisoned.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strength in Numbers",
			},
			effect: {
				en: "This attack does 30 damage plus 10 more damage for each Zubat, Golbat, and Crobat on your bench.",
			},
			damage: 30,

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
