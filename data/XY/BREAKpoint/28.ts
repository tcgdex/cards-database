import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 120,
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
				en: "Errand-Running",
				fr: "Rendez-Vous",
			},
			effect: {
				en: "Search your deck for a Trainer card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Dresseur dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Splash",
				fr: "Éclaboussure",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
