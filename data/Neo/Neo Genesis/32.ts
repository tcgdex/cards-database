import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Totodile",
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
				fr: "Charge"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Sweep Away",
				fr: "Nettoyage"
			},
			effect: {
				en: "Discard the top 3 cards from your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il ouvre son immense mâchoire en grand lorsqu'il attaque. S'il perd un croc en mordant, celui-ci repoussera."
	}
}

export default card
