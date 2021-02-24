import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Carnivine",
	},
	illustrator: "HiRON",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		455,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ambush Bite",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and discard an Energy attached to the Defending Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],




}

export default card
