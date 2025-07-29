import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Golduck",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
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
				"Psychic",
			],
			name: {
				en: "Psyshock",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274808
	}
}

export default card
