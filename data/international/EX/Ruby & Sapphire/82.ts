import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'énergie",
		'de-de': "Energietausch"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Prenez une carte Énergie de base attachée à un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
		'de-de': "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275730,
				tcgplayer: 85252
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275730,
				tcgplayer: 85252
			}
		},
	],

	retreat: 0
}

export default card
