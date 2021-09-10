import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Raichu BREAK",
		fr: "Raichu TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 130,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Raichu",
		fr: "Raichu",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grand Bolt",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
			},
			damage: 170,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Foudre Grandiose",
			},
			effect: {
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 170,

		},
	],

	retreat: 0
}

export default card
