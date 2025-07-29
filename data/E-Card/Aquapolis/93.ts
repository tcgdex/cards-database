import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
		de: "Voltilamm"
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
				fr: "Recharge",
				de: "Laden"
			},
			effect: {
				en: "Attach 1 Energy card in your discard pile to Mareep.",
				fr: "Attachez une carte Énergie  de votre pile de défausse à Wattouat.",
				de: "Lege eine -Energiekarte aus deinem Ablagestapel an Voltilamm an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Attaque caudale",
				de: "Schweifschlag"
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

	thirdParty: {
		cardmarket: 275167
	}
}

export default card
