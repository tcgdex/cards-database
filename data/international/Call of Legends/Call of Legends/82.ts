import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Professor Elm's Training Method",
		'fr-fr': "Méthode d'entraînement du Prof. Orme",
		'de-de': "Professor Linds Trainingsmethoden"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'de-de': "Durchsuche dein Deck nach 1 Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck.",
		'fr-fr': "Cherchez une carte Évolution dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88394,
				cardmarket: 279725
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88394,
				cardmarket: 279725
			},
		},
	],

}

export default card
