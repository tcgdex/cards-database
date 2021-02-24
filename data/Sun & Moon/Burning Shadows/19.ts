import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		5,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
			},

			damage: 70,

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
