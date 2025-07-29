import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Weedle",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sting",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sharp Stinger",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, the Defending Pokémon is now Paralyzed.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274350
	}
}

export default card
