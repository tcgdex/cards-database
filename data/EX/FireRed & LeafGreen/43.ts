import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Parasect",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		47,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Paras",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Energy Powder",
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards and attach them to any of your Pokémon (excluding Pokémon-ex) in any way you like. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic Spore",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 20,

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
