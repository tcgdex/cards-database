import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		231,
	],
	hp: 60,
	types: [
		"Fightning",
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
				en: "Does 10 damage times the number of damage counters on Phanpy.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Phanpy.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
			},
			effect: {
				en: "Phanpy does 10 damage to itself.",
				fr: "Phanpy s'inflige 10 dégâts.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
