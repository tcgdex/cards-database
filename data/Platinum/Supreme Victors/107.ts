import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Goldeen",
		fr: "Poissirène",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		118,
	],
	hp: 50,
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
				fr: "Fléau",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Goldeen.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Poissirène.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
