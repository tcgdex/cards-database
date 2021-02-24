import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Beldum δ",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Conductive Body",
			},
			effect: {
				en: "You pay Colorless to retreat Beldum for each Beldum on your Bench.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Take Down",
			},
			effect: {
				en: "Beldum does 10 damage to itself.",
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
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
