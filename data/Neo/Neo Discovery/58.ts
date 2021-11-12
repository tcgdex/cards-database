import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse Tonnerre"
			},
			effect: {
				en: "Flip a coin. If tails, Mareep does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, Wattouat s'inflige 10 dégâts."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Sa toison pousse constamment. En été, même tondu, sa laine repousse en moins d'une semaine."
	}
}

export default card
