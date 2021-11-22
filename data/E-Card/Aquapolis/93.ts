import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat"
	},
	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		179,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge",
				fr: "Recharge"
			},
			effect: {
				en: "Attach 1 Energy card in your discard pile to Mareep.",
				fr: "Attachez une carte Énergie  de votre pile de défausse à Wattouat."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Attaque caudale"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
