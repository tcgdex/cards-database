import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Parasect",
	},
	illustrator: "Masako Yamashita",
	rarity: "Rare",
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
				en: "Sleep Inducer",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. The new Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rupture Pollen",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, remove 2 damage counters from Parasect.",
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





}

export default card
