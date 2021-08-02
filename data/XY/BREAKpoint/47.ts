import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Luxray BREAK",
		fr: "Luxray TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 170,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Luxray",
		fr: "Luxray",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Fury",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
			},
			damage: "130+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Furie Sauvage",
			},
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "130+",

		},
	],

	retreat: 0
}

export default card
