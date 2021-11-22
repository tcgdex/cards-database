import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Beheeyem BREAK",
		fr: "Neitram TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
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
		fr: "Neitram"
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

	retreat: 0
}

export default card
