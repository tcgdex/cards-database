import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Empoleon BREAK",
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 170,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Empoleon",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Emperor's Command",
			},
			effect: {
				en: "This attack does 30 damage times the number of Pokémon your opponent has in play.",
			},
			damage: 30,

		},
	],

	thirdParty: {
		cardmarket: 289823
	}
}

export default card
