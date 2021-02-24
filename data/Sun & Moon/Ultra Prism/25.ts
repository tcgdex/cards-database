import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Salandit",
		fr: "Tritox",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		757,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
