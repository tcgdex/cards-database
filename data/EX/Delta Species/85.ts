import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		120,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque surprise"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Recover",
				fr: "Soin"
			},
			effect: {
				en: "Discard a Water Energy card attached to Staryu and remove 4 damage counters from Staryu (all if there are less than 4).",
				fr: "Défaussez une carte Énergie  attachée à Stari et retirez-lui 4 marqueurs de dégât (retirez-les lui tous s'il en a moins de 4)."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
