import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Magmortar",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Torrid Wave",
			},
			effect: {
				en: "Once during your turn (before your attack), if Magmortar is your Active Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. Put 3 damage counters instead of 2 on that Pokémon between turns. This power can't be used if Magmortar is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Bluster",
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Magmortar. Choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Magmortar can't use Flame Bluster.",
			},

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
