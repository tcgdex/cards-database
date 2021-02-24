import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},
	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Come Along",
				fr: "Compagnon",
			},
			effect: {
				en: "Search your deck for Nidoran♀ and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Nidoran♀ dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
