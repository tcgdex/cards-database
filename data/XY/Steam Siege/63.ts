import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Pawniard",
		fr: "Scalpion",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		624,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge Order",
				fr: "Ordre de Charge",
			},
			effect: {
				en: "This attack does 10 damage times the number of your Pawniard.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Scalpion.",
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
