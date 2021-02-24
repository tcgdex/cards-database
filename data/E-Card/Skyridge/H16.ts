import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Magcargo",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eruption",
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Energy card discarded in this way.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Stream",
			},
			effect: {
				en: "Discard a Energy card attached to Magcargo in order to use this attack. If your opponent has any Benched Pokémon, this attack does 10 damage to each of them. (Don't apply Weakness or Resistance for Benched Pokémon.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
