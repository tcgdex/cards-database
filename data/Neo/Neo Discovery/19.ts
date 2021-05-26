import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Butterfree",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		12,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Metapod",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Magic Dust",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now either Asleep, Confused, Paralyzed, or Poisoned (your choice).",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hyper Reverse",
			},
			effect: {
				en: "Does 10 damage times the number of Energy cards attached to the Defending Pokémon. After doing damage, remove a number of damage counters from Butterfree equal to the amount of damage done to the Defending Pokémon (after applying Weakness and Resistance).",
			},
			damage: 10,

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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
