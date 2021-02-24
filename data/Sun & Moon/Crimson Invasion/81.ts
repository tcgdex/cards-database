import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Starly",
		fr: "Étourmi",
	},
	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		396,
	],
	hp: 60,
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
				en: "Bug Search",
				fr: "Recherche Insecte",
			},
			effect: {
				en: "Your opponent reveals their hand.",
				fr: "Votre adversaire dévoile sa main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
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
