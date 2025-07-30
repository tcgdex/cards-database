import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Kadabra",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		64,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Abra",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Life Drain",
			},
			effect: {
				en: "Flip a coin. If heads, put a number of damage counters on the Defending Pokémon so that its remaining HP are 10.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshot",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274326,
		tcgplayer: 88882
	}
}

export default card
