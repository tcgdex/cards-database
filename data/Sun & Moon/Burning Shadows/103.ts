import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
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
				en: "Code Check",
				fr: "Vérification de Codes",
			},
			effect: {
				en: "Look at 1 of your opponent's face-down Prize cards.",
				fr: "Regardez l’une des cartes Récompense de votre adversaire (actuellement face cachée).",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beam",
				fr: "Rayon",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
