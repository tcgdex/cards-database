import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		108,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lunge",
				fr: "Coup Rapide",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
