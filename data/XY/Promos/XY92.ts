import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Hunt",
				fr: "Stop Θ",
			},
			effect: {
				en: "Flip 3 coins. For each heads, attach a basic Energy card from your discard pile to your Benched Pokémon-EX in any way you like.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
			},

			damage: 20,

		},
	],


	retreat: 2,



}

export default card
