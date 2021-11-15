import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Carvanha δ",
		fr: "Carvanha δ ESPÈCES DELTA"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		318,
	],
	hp: 40,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 10,
			cost: ["Colorless"]
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente"
			},
			effect: {
				en: "Flip a coin. If tails, Carvanha does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Carvanha s'inflige 10 dégâts."
			},
			damage: 30,

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
