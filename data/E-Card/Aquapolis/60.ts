import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Skiploom",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		188,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Hoppip",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lightweight",
			},
			effect: {
				en: "You pay Colorless less to retreat Skiploom for each Grass Energy attached to it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Break Powder",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage. If tails, this attack does 10 damage and the Defending Pokémon is now Asleep.",
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
			type: "Water",
			value: "-30"
		},
	],




}

export default card
