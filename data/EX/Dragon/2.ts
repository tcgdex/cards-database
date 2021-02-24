import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Altaria",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Swablu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Dance",
			},
			effect: {
				en: "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 40 more damage (before applying Weakness and Resistance).",
			},

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Dragon Song",
			},
			effect: {
				en: "Each Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
