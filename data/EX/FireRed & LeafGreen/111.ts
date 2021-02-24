import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Mr. Mime ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 80,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Magic Evens",
			},
			effect: {
				en: "If Mr. Mime ex would be damaged by an attack, prevent that attack's damage done to Mr. Mime ex if that damage is 20, 40, 60, 80, 100, 120, 140, 160, or 180.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Breakdown",
			},
			effect: {
				en: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
			},

		},
	],






}

export default card
