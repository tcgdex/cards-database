import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Hypno",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drowzee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Invigorate",
			},
			effect: {
				en: "Choose 1 Basic Pokémon in any player's discard pile. Put it onto that player's Bench. Put a number of damage counters on that Pokémon equal to half its HP (rounded down to the nearest 10). (You can't put a Pokémon on a Bench that's full.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Pendulum Curse",
			},
			effect: {
				en: "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 20 damage times the number of heads.",
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
		cardmarket: 274324,
		tcgplayer: 88879
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
	]
}

export default card
