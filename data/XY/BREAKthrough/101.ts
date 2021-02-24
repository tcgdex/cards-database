import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		669,
	],
	hp: 30,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Wish",
				fr: "Vœu",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
