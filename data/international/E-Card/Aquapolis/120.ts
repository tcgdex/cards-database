import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'énergie",
		'de-de': "Energie-Umschalter"
	},

	illustrator: "Mikio Menjo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Prenez une carte Énergie de base attachée à l'un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
		'de-de': "Move a basic Energy from 1 of your Pokémon to another of your Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85253,
				cardmarket: 275196
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85253,
				cardmarket: 275196
			}
		},
	]
}

export default card
