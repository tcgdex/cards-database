import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
		de: "Muntier"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		288,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Slakoth",
		fr: "Parecool",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente",
				de: "Reckless Charge"
			},
			effect: {
				en: "Flip a coin. If tails, Vigoroth does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Vigoroth s'inflige 10 dégâts.",
				de: "Flip a coin. If tails, Vigoroth does 10 damage to itself."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fight Back",
				fr: "Rendre les coups",
				de: "Fight Back"
			},
			effect: {
				en: "If Vigoroth has any damage counters on it, this attack does 50 damage plus 20 more damage.",
				fr: "Si Vigoroth possède des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "If Vigoroth has any damage counters on it, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278485
	}
}

export default card
