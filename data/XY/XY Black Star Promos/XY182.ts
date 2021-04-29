import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Mandibuzz BREAK",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		630,
	],
	hp: 140,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Mandibuzz",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wings of Disaster",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness and Resistance. Then, discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
			},

		},
	],






}

export default card
