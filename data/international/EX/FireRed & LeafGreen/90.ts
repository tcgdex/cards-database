import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
		'de-de': "Energie-Umschalter"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Déplacez une carte Énergie de base d'1 de vos Pokémon à 1 autre de vos Pokémon.",
		'de-de': "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276266,
				tcgplayer: 85254
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276266,
				tcgplayer: 85254
			},
		},
	],
}

export default card
