import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Abra",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		63,
	],

	hp: 40,

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
				en: "Pound",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Synchronize",
			},
			effect: {
				en: "This attack can't be used unless Sabrina's Abra and the Defending Pokémon have the same number of Energy cards attached to them.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274361
	}
}

export default card
