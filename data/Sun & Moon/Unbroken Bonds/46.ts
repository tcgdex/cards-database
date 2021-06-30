import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Krabby",
		fr: "Krabby",
		es: "Krabby",
		it: "Krabby",
		pt: "Krabby",
		de: "Krabby"
	},
	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		98,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
				es: "Estampida",
				it: "Fuggi Fuggi",
				pt: "Estouro",
				de: "Zertrampeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Vice Grip",
				fr: "Force Poigne",
				es: "Agarre",
				it: "Presa",
				pt: "Agarramento Viciado",
				de: "Klammer"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
