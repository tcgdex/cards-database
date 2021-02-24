import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sizzlipede",
		fr: "Grillepattes",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Relentless Flames",
				fr: "Flammes Incessantes",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
				fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
			},
			damage: "40×",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
