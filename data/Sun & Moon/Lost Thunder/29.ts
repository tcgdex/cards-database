import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Nincada",
		fr: "Ningale",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		290,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
