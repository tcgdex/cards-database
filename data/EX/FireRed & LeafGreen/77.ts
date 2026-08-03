import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
				de: "Collect"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Draw a card."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Scratch"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276253,
				tcgplayer: 88615
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276253,
				tcgplayer: 88615
			},
		},
	],
}

export default card
