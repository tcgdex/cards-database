import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Greninja-GX",
	},
	illustrator: "MPC Film",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		658,
	],
	hp: 230,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Frogadier",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Elusive Master",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is the last card in your hand, you may play it onto your Bench. If you do, draw 3 cards.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mist Slash",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
			},
			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Dark Mist-GX",
			},
			effect: {
				en: "Put 1 of your opponent's Benched Pokémon and all cards attached to it into your opponent's hand. (You can't use more than 1 GX attack in a game.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
