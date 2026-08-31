import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Maintenance",
		fr: "Entretien",
		de: "Wartung"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez 2 cartes de votre main avec votre deck. (Si vous ne pouvez pas mélanger 2 cartes avec votre deck, vous ne pouvez pas jouer cette carte.) Ensuite, piochez une carte.",
		en: "Shuffle 2 cards from your hand into your deck. (If you can't shuffle 2 cards into your deck, you can't play this card.) Then, draw a card.",
		de: "Mische 2 Karten von deiner Hand in dein Deck. (Wenn du keine 2 Karten in dein Deck mischen kannst, kannst du diese Karte nicht spielen.) Ziehe anschließend 1 Karte. Du kannst während deines Zuges (vor deinem Angriff) beliebig viele Itemkarten spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288500,
		tcgplayer: 113722
	}
}

export default card
