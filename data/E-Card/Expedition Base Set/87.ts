import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Metapod",
	},
	illustrator: "Yuichi Sawayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
			},
			effect: {
				en: "All damage done to Metapod is reduced by 20 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
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
