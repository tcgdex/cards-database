import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Wally's Training",
		'fr-fr': "Timmy au dressage",
		'de-de': "Heikos Training"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a card that evolves from your Active Pokémon (choose 1 if there are 2) and put it on your Active Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
		'fr-fr': "Choisissez dans votre deck une carte qui évolue de votre Pokémon Actif (choisissez un Pokémon Actif si vous en avez deux) et placez-la sur ce Pokémon. (Vous le faites ainsi évoluer). Ensuite, mélangez votre deck.",
		'de-de': "Search your deck for a card that evolves from your Active Pokémon (choose 1 if there are 2) and put it on your Active Pokémon. (This counts as evolving that Pokémon.) Shuffle your Deck afterward.",
	},

	thirdParty: {
		tcgplayer: 90465,
		cardmarket: 276596
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90465,
				cardmarket: 276596
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90465,
				cardmarket: 276596
			},
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				tcgplayer: 477595,
				cardmarket: 871559
			},
		}
	],
}

export default card
