import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Farfetch'd",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		83,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hoard",
			},
			effect: {
				en: "Search your deck for up to 2 Pokémon Tool cards and attach them to any of your Pokémon (excluding Pokémon that already have a Pokémon Tool attached to them). Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 10 damage plus 20 more damage.",
			},
			damage: 10,

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
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
