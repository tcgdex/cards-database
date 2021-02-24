import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		152,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit'sieste",
			},
			effect: {
				en: "Remove 1 damage counter from Chikorita.",
				fr: "Retirez 1 marqueur de dégât à Germignon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente",
			},
			effect: {
				en: "Chikorita does 10 damage to itself.",
				fr: "Germignon s’inflige 10 dégâts.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
