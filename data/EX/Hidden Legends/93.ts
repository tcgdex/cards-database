import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Groudon ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 100,
	types: [
		"Fightning",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mark of Antiquity",
			},
			effect: {
				en: "As long as Groudon ex is your Active Pokémon, each player's Kyogre ex and Rayquaza ex can't attack.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Crushing Mantle",
			},
			effect: {
				en: "You may discard from your hand as many Energy cards as you like. If you do, this attack does 50 damage plus 10 more damage for each Energy card you discarded.",
			},
			damage: 50,

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
