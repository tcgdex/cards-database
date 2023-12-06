import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Alph Lithograph",
		fr: "Lithographie d’Alph",
		de: "Alph Lithograph"
	},

	illustrator: "Milky Isobe",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Return any Stadium card in play to its player’s hand!",
		fr: "Toutes les cartes Stade en jeu sont restituées dans la main de leur joueur !",
		de: "Gib eine Stadionkarte im Spiel auf die Hand des jeweiligen Spielers zurück!"
	},

	trainerType: "Item",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 0
}

export default card
