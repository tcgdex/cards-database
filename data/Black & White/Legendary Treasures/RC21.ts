import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Shaymin-EX",
	},
	illustrator: "Kanako Eo",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 110,
	types: [
		"Grass",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Synthesis",
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Revenge Blast",
			},
			effect: {
				en: "Does 30 more damage for each Prize card your opponent has taken.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
