import { Card } from '../../../interfaces'
import Set from '../Southern Islands'

const card: Card = {
	name: {
		en: "Mew",
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 30,

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
				en: "Rainbow Wave",
			},
			effect: {
				en: "Choose a type of Energy other than Colorless attached to Mew. This attack does 20 damage to each of your opponent's Pokémon of that type (including Benched Pokémon). Don't apply Weakness and Resistance.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275631,
		tcgplayer: 46466
	}
}

export default card
