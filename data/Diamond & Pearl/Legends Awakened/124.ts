import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Taillow",
		fr: "Nirondelle",
	},
	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		276,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
			},
			effect: {
				en: "During your next turn, Taillow's Peck attack's base damage is 30.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Picpic de Nirondelle sont de 30.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
