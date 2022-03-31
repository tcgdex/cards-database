import { Card } from '../../../interfaces'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		it: "Froakie",
		pt: "Froakie",
		de: "Froxy"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		656,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
				es: "Destructor",
				it: "Botta",
				pt: "Pancada",
				de: "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Drip",
				fr: "Goutte à Goutte",
				es: "Goteo de Agua",
				it: "Gocciolacqua",
				pt: "Gotejo",
				de: "Spritzwasser"
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
