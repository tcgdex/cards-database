import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Mareanie",
		fr: "Vorastérie",
		es: "Mareanie",
		it: "Mareanie",
		pt: "Mareanie",
		de: "Garstella"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		747,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
			},

			damage: 10,

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
