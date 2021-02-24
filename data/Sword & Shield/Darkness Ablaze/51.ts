import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Mareanie",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Regeneration",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Poison Tentacles",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
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

	retreat: 2,



}

export default card
