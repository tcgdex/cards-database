import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Alph Lithograph",
		'fr-fr': "Lithographie d’Alph",
		'de-de': "Alph Lithograph"
	},

	illustrator: "Milky Isobe",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Return any Stadium card in play to its player's hand!",
		'fr-fr': "Toutes les cartes Stade en jeu sont restituées dans la main de leur joueur !",
		'de-de': "Gib eine Stadionkarte im Spiel auf die Hand des jeweiligen Spielers zurück!"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279253,
				tcgplayer: 83511
			},
		},
	],
	hp: 0,

	retreat: 0
}

export default card
