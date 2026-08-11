import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Copycat",
		'fr-fr': "Copieuse",
		'de-de': "Nachahmerin"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
		'de-de': "Mische deine Handkarten in dein Deck. Zähle danach die Anzahl der Karten auf der Hand deines Gegners. Ziehe ebenso viele Karten.",
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes de la main de votre adversaire.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84428,
				cardmarket: 279720
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84428,
				cardmarket: 279720
			},
		},
	],

}

export default card
