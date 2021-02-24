import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Octillery",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		224,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Remoraid",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Constrict",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Octazooka",
			},
			effect: {
				en: "Flip a coin. If heads, whenever the Defending Pokémon attacks, your opponent flips a coin. If tails that attack does nothing. (Benching or evolving that Pokémon ends this effect.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
