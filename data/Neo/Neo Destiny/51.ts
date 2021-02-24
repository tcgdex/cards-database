import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Slowbro",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fish Out",
			},
			effect: {
				en: "Your opponent may choose up to 3 Baby Pokémon, Basic Pokémon, and/or Evolution cards from his or her discard pile and shuffle them into his or her deck. Either way, you may do the same.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Slash About",
			},
			effect: {
				en: "If there are more Energy cards attached to the Defending Pokémon than to Light Slowbro, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
