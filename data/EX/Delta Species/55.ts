import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Skarmory",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shining Horn",
			},
			effect: {
				en: "As long as Skarmory is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cry for Help",
			},
			effect: {
				en: "Search your deck for a Metal Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Skarmory by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
			damage: 20,

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
