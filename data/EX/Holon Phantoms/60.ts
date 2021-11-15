import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Barboach",
		fr: "Barloche"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		339,
	],
	hp: 50,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flail",
				fr: "Fléau"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Barboach.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Barloche."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
