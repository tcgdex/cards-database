import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		390,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Baie Ceriz",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Si Ouisticram est Paralysé, retirez à Ouisticram l'État Spécial Paralysé à la fin du tour de chaque joueur.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Combo-griffe",
			},
			effect: {
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
			},
			damage: "10x",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
