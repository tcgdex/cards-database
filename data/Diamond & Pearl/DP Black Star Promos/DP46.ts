import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Garchomp C",
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 110,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Breath",
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Garchomp  LV.X from your hand onto your Active Garchomp , you may remove all damage counters from each of your Pokémon SP.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Rush",
			},
			effect: {
				en: "Discard 2 Energy attached to Garchomp . Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Garchomp  can't use Dragon Rush during your next turn.",
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
