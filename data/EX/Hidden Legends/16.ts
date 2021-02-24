import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Bellossom",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		182,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Heal Dance",
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Heal Dance Poké-Power each turn. This power can't be used if Bellossom is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Miracle Powder",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solarbeam",
			},

			damage: 50,

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
