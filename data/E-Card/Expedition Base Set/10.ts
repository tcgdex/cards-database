import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dugtrio",
	},
	illustrator: "Masako Yamashita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Diglett",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Mud Slap",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnitude",
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and resistance for Benched Pokémon.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
