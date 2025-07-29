import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge's Pikachu",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pichu",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge",
			},
			effect: {
				en: "Take 1 Energy card from your discard pile and attach it to Lt. Surge's Pikachu.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Lightning Tail",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274217
	}
}

export default card
