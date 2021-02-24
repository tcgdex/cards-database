import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		84,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gatling Peck",
				fr: "Mitra-Bec",
			},
			effect: {
				en: "Flip 5 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 5 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
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
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
