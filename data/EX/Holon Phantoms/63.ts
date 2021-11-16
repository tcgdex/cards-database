import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Corphish",
		fr: "Ecrapince"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		341,
	],
	hp: 40,
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
				fr: "Fléau"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Corphish.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Ecrapince."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-masse"
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
