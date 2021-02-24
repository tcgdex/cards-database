import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Shellos East Sea",
		fr: "Sancoki Mer Orient",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		422,
	],
	hp: 60,
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
				en: "Shell Hunting",
				fr: "Chasse au coquillage",
			},
			effect: {
				en: "Search your deck for up to 2 in any combination of Shellos West Sea and Shellos East Sea and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une combinaison de jusqu'à 2 Sancoki Mer Occident\net Sancoki Mer Orient et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sprinkle Water",
				fr: "Eau aspergeante",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 2,



}

export default card
