import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Raikou",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pure Body",
			},
			effect: {
				en: "To attach a Lightning Energy card from your hand to Raikou, you must discard an Energy card attached to Raikou. (Attach the Lightning energy, and then discard an Energy card from Raikou.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Sphere",
			},
			effect: {
				en: "You may flip a coin. If heads, discard all Energy cards attached to Raikou. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
