import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Chimecho",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Chime",
			},
			effect: {
				en: "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Boom",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
			},
			damage: 10,

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
