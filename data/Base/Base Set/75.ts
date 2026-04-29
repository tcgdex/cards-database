import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Lass",
		fr: "Fillette",
		de: "Göre",
		it: "Pupa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous révélez votre main ainsi que votre adversaire, puis mélangez toutes les cartes Dresseur de vos mains dans vos decks respectifs.",
		de: "Du und Dein Gegner zeigen sich gegenseitig die Karten auf der Hand, und mischen dann alle Trainerkarten aus der Hand in den Stapel-",
		it: "Tu e il tuo avversario vi mostrate le carte che avete in mano; poi ognuno rimette tutte le carte Addestramento che ha in mano nel proprio mazzo e lo rimischia."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273770,
				tcgplayer: 42421
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 660143
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	],
}

export default card
