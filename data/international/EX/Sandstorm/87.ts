import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Lanette's Net Search",
		'fr-fr': "Annette surfe sur le net",
		'de-de': "Lanettes Internetsuche"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 3 different types of Basic Pokémon cards (excluding Baby Pokémon), show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		'fr-fr': "Choisissez dans votre deck jusqu'à trois types de cartes Pokémon de base différents (sauf les cartes Bébé Pokémon), montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Durchsuche dein Deck nach bis zu 3 verschiedenen Basis-Pokémon (außer Baby-Pokémon), zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275864,
				tcgplayer: 86597
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275864,
				tcgplayer: 86597
			}
		},
	],

	retreat: 0
}

export default card
