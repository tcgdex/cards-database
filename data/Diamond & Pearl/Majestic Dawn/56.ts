import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
	},
	illustrator: "Daisuke Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		390,
	],
	hp: 40,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Intimidation",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lunge",
				fr: "Coup rapide",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
