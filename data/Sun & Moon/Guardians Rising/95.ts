import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Sliggoo",
		fr: "Colimucus",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		705,
	],
	hp: 70,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Division",
				fr: "Division",
			},
			effect: {
				en: "Search your deck for up to 2 Sliggoo and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 Colimucus dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Fairy",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
