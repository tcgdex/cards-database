import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Weepinbell",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		70,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bellsprout",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Corrosive Acid",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
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





}

export default card
