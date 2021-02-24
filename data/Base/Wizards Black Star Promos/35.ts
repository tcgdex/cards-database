import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Pichu",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		172,
	],
	hp: 30,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Let's Play!",
			},
			effect: {
				en: "Search your deck for a Baby Pokémon card and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
			},

		},
	],






}

export default card
