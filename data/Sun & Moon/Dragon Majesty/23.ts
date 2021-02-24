import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		159,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Sweep Away",
				fr: "Nettoyage",
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
