import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Hoppip",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		187,
	],
	hp: 30,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Buffer",
			},
			effect: {
				en: "If Hoppip would be Knocked Out by an opponent's attack, flip a coin. If heads, Hoppip is not Knocked Out and its remaining HP becomes 10 instead.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miracle Powder",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
			},

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
			type: "Water",
			value: "-30"
		},
	],




}

export default card
