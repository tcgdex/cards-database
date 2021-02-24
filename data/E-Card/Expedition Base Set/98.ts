import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Charmander",
	},
	illustrator: "Yuichi Sawayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		4,
	],
	hp: 50,
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
				en: "Gnaw",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
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
