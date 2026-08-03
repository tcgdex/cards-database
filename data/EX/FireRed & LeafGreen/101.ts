import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).",
		fr: "Soignez 30 dégâts à 1 de vos Pokémon .",
		de: "Entferne 2 Schadensmarken von 1 deiner Pokémon (1 falls dieses nur 1 hat).",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276277,
				tcgplayer: 88334
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276277,
				tcgplayer: 88334
			},
		},
	],
}

export default card
