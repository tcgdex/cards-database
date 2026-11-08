import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'de-de': "Tausch"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif avec 1 des Pokémon de votre Banc.",
		'de-de': "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276278,
				tcgplayer: 89712
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276278,
				tcgplayer: 89712
			},
		},
	],
}

export default card
