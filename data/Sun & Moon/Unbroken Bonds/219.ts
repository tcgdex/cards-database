import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dedenne-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		702,
	],
	hp: 160,
	types: [
		"Lightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dedechange",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard your hand and draw 6 cards. You can't use more than 1 Dedechange Ability each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Static Shock",
			},

			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tingly Return-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed. Put this Pokémon and all cards attached to it into your hand. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
