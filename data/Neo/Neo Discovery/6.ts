import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Kabutops",
		fr: "Kabutops"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Kabuto",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
			],

			name: {
				en: "Hydrocutter",
				fr: "Hydro-lame"
			},

			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to Kabutops. This attack does 40 times the number of heads. You can't flips more than 3 coins in this way.",
				fr: "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées à Kabutops. Cette attaque inflige 40 dégâts, multipliés par le nombre de faces. Vous ne pouvez pas lancer plus de 3 pièces."
			},

			damage: "40×"
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Dans l'eau, il rentre ses pattes pour devenir plus compact, puis il agite sa carapace pour nager plus vite."
	}
}

export default card
