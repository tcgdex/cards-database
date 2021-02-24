import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Loupio",
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		170,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scout",
				fr: "Espionnage",
			},
			effect: {
				en: "Your opponent reveals their hand.",
				fr: "Votre adversaire dévoile sa main.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-Rasoir",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
