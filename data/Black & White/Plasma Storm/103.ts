import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		it: "Togetic",
		pt: "Togetic",
		de: "Togetic"
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweet Kiss",
				fr: "Doux Baiser",
			},
			effect: {
				en: "Your opponent draws a card.",
				fr: "Votre adversaire pioche une carte.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
