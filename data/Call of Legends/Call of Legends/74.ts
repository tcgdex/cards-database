import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Totodile",
		fr: "Kaiminus",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		158,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Tail",
				fr: "Hydroqueue",
			},
			effect: {
				en: "Flip a coin for each Water Energy attached to Totodile. This attack does 30 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Water attachée à Kaiminus. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
