import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		748,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Spike Shot",
				fr: "Tir d’Épines",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
