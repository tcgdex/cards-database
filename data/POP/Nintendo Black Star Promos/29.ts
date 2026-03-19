import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Slice",
				fr: "Tranche feuille"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
