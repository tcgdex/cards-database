import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Caterpie",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		10,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Signs of Evolution",
			},
			effect: {
				en: "Search your deck for a Metapod and a Butterfree card, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "String Shot",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
