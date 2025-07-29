import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Jynx",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Doubleslap",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Meditate",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
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

	thirdParty: {
		cardmarket: 274791
	}
}

export default card
