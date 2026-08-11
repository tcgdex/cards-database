import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Transfert",
		'de-de': "Tausch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif contre l'un des Pokémon de votre Banc.",
		'de-de': "Tausche dein Aktives Pokémon mit 1 der Pokémon auf der Bank aus."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89711,
				cardmarket: 275032
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89711,
				cardmarket: 275032
			},
		},
	],
}

export default card
