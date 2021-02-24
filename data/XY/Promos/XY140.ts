import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Bone Rush",
				fr: "Charge-Os",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Mach Claw",
				fr: "Instagriffe",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
