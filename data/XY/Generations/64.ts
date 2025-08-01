import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Maintenance",
		fr: "Entretien",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez 2 cartes de votre main avec votre deck. (Si vous ne pouvez pas mélanger 2 cartes avec votre deck, vous ne pouvez pas jouer cette carte.) Ensuite, piochez une carte.",
		en: "Shuffle 2 cards from your hand into your deck. (If you can't shuffle 2 cards into your deck, you can't play this card.) Then, draw a card."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288500,
		tcgplayer: 113722
	}
}

export default card
