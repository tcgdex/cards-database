import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Pichu",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
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
				en: "Zzzap",
			},
			effect: {
				en: "Does 20 damage to each Pokémon in play that has a Pokémon Power. Don't apply Weakness and Resistance.",
			},

		},
	],






}

export default card
