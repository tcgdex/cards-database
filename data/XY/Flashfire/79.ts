import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "M Kangaskhan EX",
		fr: "M Kangourex-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		115,
	],
	hp: 230,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Kangaskhan-EX",
		fr: "Kangourex-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wham Bam Punch",
				fr: "Règle des Méga-Évolutions",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			},
			damage: "100+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Poing Boum",
			},
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
