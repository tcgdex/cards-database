import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		657,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Duplicates",
				fr: "Duplicat'Eau",
			},
			effect: {
				en: "Search your deck for up to 3 Frogadier and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 3 Croâporal dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

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
