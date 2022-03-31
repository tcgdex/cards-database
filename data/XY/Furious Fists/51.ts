import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		296,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Punch",
				fr: "Koud'Poing",
				es: "Puño",
				it: "Pugno",
				pt: "Soco",
				de: "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strength",
				fr: "Force",
				es: "Fuerza",
				it: "Forza",
				pt: "Força",
				de: "Stärke"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
