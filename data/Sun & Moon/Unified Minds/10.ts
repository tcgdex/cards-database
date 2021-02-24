import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dwebble",
		fr: "Crabicoque",
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		557,
	],
	hp: 70,
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
				en: "Dig Claws",
				fr: "Creusogriffes",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
