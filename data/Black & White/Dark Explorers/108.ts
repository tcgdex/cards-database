import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Tornadus-EX",
		fr: "Boréas-EX",
		es: "Tornadus-EX",
		it: "Tornadus-EX",
		pt: "Tornadus-EX",
		de: "Boreos-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		641,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blow Through",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 more damage.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Blast",
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1
}

export default card
