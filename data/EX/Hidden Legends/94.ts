import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Kyogre ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 100,
	types: [
		"Water",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mark of Antiquity",
			},
			effect: {
				en: "As long as Kyogre ex is your Active Pokémon, each player's Groudon ex and Rayquaza ex can't attack.",
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
				en: "Water Arrow",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Super Tidal Wave",
			},
			effect: {
				en: "You may show your hand to your opponent. If you do, this attack does 50 damage plus 10 more damage for each Energy card in your hand. After doing damage, shuffle the Energy cards back into your deck.",
			},
			damage: 50,

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
