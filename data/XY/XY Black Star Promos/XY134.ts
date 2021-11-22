import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Empoleon BREAK",
		fr: "Pingoléon TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
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
		fr: "Pingoléon"
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

	retreat: 0
}

export default card
