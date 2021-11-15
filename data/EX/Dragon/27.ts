import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie"
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		180,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Mareep",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Recall",
				fr: "Rappel d'énergie"
			},
			effect: {
				en: "Attach up to 2 basic Energy cards from your discard pile to Flaaffy.",
				fr: "Attachez à Lainergie jusqu'à deux cartes Énergie de base de votre pile de défausse."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Ball",
				fr: "Boule éclair"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
