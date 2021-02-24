import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Bellossom",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		182,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sweet Nectar",
			},
			effect: {
				en: "Flip a coin. If heads, remove all damage counters from 1 of your Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flower Dance",
			},
			effect: {
				en: "Does 30 damage times the number of cards with Bellossom in their names that you have in play (including this one).",
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





}

export default card
