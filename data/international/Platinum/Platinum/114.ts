import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Pokédex HANDY910is",
		'fr-fr': "Pokédex HANDY910is",
		'de-de': "Pokédex HANDY910is"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck.",
		'fr-fr': "Regardez les 2 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez l'autre carte au dessous de votre deck.",
		'de-de': "Look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck."
	},

	trainerType: "Item",

	variants: [		{
			type:"normal",
			thirdParty: {
				cardmarket: 278535,
				tcgplayer: 88203
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278535,
				tcgplayer: 88203
			}
		},
		{
			type:"normal",
			stamp: ["jason-martinez"],
			thirdParty: {
				tcgplayer: 479940
			}
		}
	],

	retreat: 0
}

export default card
