import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Honchkrow-GX",
	},
	illustrator: "sadaji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		430,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Murkrow",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ruler of the Night",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from their hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feather Storm",
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent's Benched Pokémon-GX and Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Unfair-GX",
			},
			effect: {
				en: "Your opponent reveals their hand. Discard 2 cards from it. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
