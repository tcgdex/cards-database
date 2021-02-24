import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		608,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
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
