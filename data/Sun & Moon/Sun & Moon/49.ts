import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Loupio",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		170,
	],
	hp: 70,
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
				en: "Searching Light",
				fr: "Sonde Lumineuse",
			},
			effect: {
				en: "Look at 1 of your face-down Prize cards.",
				fr: "Regardez l’une de vos cartes Récompense (actuellement face cachée).",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
			},

			damage: 30,

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
