import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "PokéNav",
		'fr-fr': "PokéNav",
		'de-de': "PokéNav"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Look at the top 3 cards of your deck, and choose a Basic Pokémon, Evolution card, or Energy card. Show it to your opponent and put it into your hand. Put the 2 other cards back on top of your deck in any order.",
		'fr-fr': "Regardez les trois cartes placées au-dessus de votre deck et choisissez un Pokémon de base, une carte Évolution ou une carte Énergie. Montrez-la à votre adversaire et placez-la dans votre main. Remettez les deux autres cartes dans votre deck dans n'importe quel ordre.",
		'de-de': "Look at the top 3 cards of your deck, and choose a basic Pokémon, Evolution card, or Energy card. Show it to your opponent and put it into your hand. Put the 2 other cards back on top of your deck in any other."
	},


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275736,
				tcgplayer: 88243
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275736,
				tcgplayer: 88243
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 131361
			}
		}
	],

	retreat: 0
}

export default card
