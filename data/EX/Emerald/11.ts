import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Swampert",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marshtomp",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Water Cyclone",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy attached to 1 of your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spinning Tail",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
			},
			damage: 60,

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
