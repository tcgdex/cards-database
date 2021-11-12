import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Caterpie",
		fr: "Chenipan"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spin Tackle",
				fr: "Charge vrille"
			},
			effect: {
				en: "Caterpie does 10 damage to itself.",
				fr: "Chenipan s'inflige 10 dégâts."
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

	description: {
		fr: "Pour se protéger, une horrible puanteur émane de ses antennes pour repousser ses ennemis."
	}
}

export default card
