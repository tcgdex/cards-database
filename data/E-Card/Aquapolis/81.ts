import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		107,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rush",
				fr: "Précipitation"
			},
			effect: {
				en: "Flip 5 coins. This attack does 10 damage times the number of heads. Hitmonchan can't attack during your next turn.",
				fr: "Lancez 5 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces. Tygnon ne peut pas attaquer pendant votre prochain tour."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Smash Punch",
				fr: "Ruade"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
			},

			damage: 50
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
