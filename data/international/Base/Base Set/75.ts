import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Lass",
		'fr-fr': "Fillette",
		'de-de': "Göre",
		'it-it': "Pupa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You and your opponent show each other your hands, then shuffle all the Trainer cards from your hands into your decks.",
		'fr-fr': "Vous révélez votre main ainsi que votre adversaire, puis mélangez toutes les cartes Dresseur de vos mains dans vos decks respectifs.",
		'de-de': "Du und Dein Gegner zeigen sich gegenseitig die Karten auf der Hand, und mischen dann alle Trainerkarten aus der Hand in den Stapel-",
		'it-it': "Tu e il tuo avversario vi mostrate le carte che avete in mano; poi ognuno rimette tutte le carte Addestramento che ha in mano nel proprio mazzo e lo rimischia."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273770,
				tcgplayer: 42421
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107071
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107071
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
