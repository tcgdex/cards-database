import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Sabrina's Drowzee",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 50,

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
				en: "Suggestion",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
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
		cardmarket: 274228
	}
}

export default card
