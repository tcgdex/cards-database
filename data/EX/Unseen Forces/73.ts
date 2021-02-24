import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Slugma",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		218,
	],
	hp: 40,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Yawn",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
