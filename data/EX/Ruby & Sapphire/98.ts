import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Hitmonchan ex",
		fr: "Tygnon ex"
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		107,
	],
	hp: 90,
	types: [
		"Fighting",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Steady Punch",
				fr: "Poing énergétique"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
				fr: "Stratopercut"
			},
			effect: {
				en: "The attack's damage is not affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
