import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Empoleon",
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 140,
	types: [
		"Water",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Supreme Command",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose up to 2 cards from your opponent's hand without looking and put them face down next to the Defending Pokémon. (These cards are not in play or in your opponent's hand.) At the end of your opponent's next turn, return those cards to your opponent's hand. This power can't be used if Empoleon is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Impact",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't attack during your next turn.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],





}

export default card
