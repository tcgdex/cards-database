import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Gardevoir-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 170,
	types: [
		"Fairy",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Link Blast",
			},
			effect: {
				en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 70 more damage.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Luminous Blade",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],




}

export default card
