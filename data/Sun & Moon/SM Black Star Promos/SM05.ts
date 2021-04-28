import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Snorlax-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 190,
	types: [
		"Colorless",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Collapse",
			},
			effect: {
				en: "This Pokémon is now Asleep.",
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderous Snore",
			},
			effect: {
				en: "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing.",
			},
			damage: 180,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulverizing Pancake-GX",
			},
			effect: {
				en: "This Pokémon is now Asleep. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 210,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
