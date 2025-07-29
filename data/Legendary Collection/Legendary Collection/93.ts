import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Slowpoke",
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

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
				en: "Spacing Out",
			},
			effect: {
				en: "Flip a coin. If heads, remove a damage counter from Slowpoke. This attack can't be used if Slowpoke has no damage counters on it.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Scavenge",
			},
			effect: {
				en: "Discard 1 Energy card attached to Slowpoke in order to use this attack. Put a Trainer card from your discard pile into your hand.",
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
		cardmarket: 274858
	}
}

export default card
