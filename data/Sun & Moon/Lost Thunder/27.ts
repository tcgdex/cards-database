import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Cascoon",
		fr: "Blindalys",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		268,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cocoon Collector",
				fr: "Collectionneur de Cocons",
			},
			effect: {
				en: "Search your deck for up to 4 in any combination of Silcoon and Cascoon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez une combinaison d’un maximum de 4 Armulys et Blindalys dans votre deck, et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 30,

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
