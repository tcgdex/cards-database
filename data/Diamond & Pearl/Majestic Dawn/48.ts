import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 80,
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
				en: "Flail",
				fr: "Fléau",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Sudowoodo.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Simularbre.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Wood Hammer",
				fr: "Martobois",
			},
			effect: {
				en: "Sudowoodo does 30 damage to itself.",
				fr: "Simularbre s'inflige 30 dégâts.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
