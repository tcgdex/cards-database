import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Celebi",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Sprouting",
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to Celebi. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leaf Tornado",
			},
			effect: {
				en: "You may move any number of basic Grass Energy cards attached to your Pokémon to your other Pokémon in any way you like.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],





}

export default card
