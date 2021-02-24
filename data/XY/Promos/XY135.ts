import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Beheeyem BREAK",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		606,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Beheeyem",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Cosmic Circle",
			},
			effect: {
				en: "Move as many Psychic Energy attached to your Pokémon to your other Pokémon in any way you like.",
			},
			damage: 100,

		},
	],






}

export default card
