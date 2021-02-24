import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Sunflora",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		192,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sunkern",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Dazzle Dance",
			},
			effect: {
				en: "Each Defending Pokémon is now Confused.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Green Blast",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
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
			type: "Water",
			value: "-30"
		},
	],




}

export default card
