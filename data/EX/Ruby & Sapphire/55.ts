import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Goldeen",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		118,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
			},
			effect: {
				en: "Does 10 damage for each damage counter on Goldeen.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
