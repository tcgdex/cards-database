import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Hoppip",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		187,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lightweight",
			},
			effect: {
				en: "You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Careless Tackle",
			},
			effect: {
				en: "Hoppip does 10 damage to itself.",
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
