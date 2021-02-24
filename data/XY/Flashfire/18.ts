import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Litleo",
		fr: "Hélionceau",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		667,
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
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
