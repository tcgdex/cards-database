import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Misty's Golduck",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Electro Beam",
			},
			effect: {
				en: "Flip a coin. If tails, discard all Energy cards attached to Misty's Golduck.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Removal",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Energy card attached to each of your opponent's Pokémon that has any Energy cards and discard those Energy cards.",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274280,
		tcgplayer: 87530
	}
}

export default card
