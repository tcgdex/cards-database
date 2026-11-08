import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

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
		'fr-fr': "Déplacez une carte Énergie de base attachée à 1 de vos Pokémon sur un autre de vos Pokémon.",
		'de-de': "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85255,
				cardmarket: 276730
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85255,
				cardmarket: 276730
			},
		}
	],
}

export default card
