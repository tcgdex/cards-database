import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magneti"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
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
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Magnetism",
				fr: "Magnétisme"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Magnemite, Magneton, and Dark Magneton on your Bench.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Magneti, Magneton et Magneton obscur de votre Banc."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "La rumeur prétend que si un nombre suffisant de Magneti et de Magneton se rassemblent, ils peuvent créer une puissante barrière magnétique."
	}
}

export default card
