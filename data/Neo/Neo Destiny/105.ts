import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Mail from Bill",
		fr: "Courrier de Léo",
		de: "Post von Bill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez pas jouer cette carte si vous avez 5 cartes ou plus dans votre main (y compris celle-ci). Piochez des cartes jusqu'à ce que votre main soit de 4 cartes.",
		de: "You can´t play this card if you have 5 or more cards in your hand (including this one). Draw cards until you have exactly 4 cards in your hand."
	},

	thirdParty: {
		cardmarket: 274757,
		tcgplayer: 87123
	}
}

export default card
