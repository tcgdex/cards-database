import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Mail from Bill",
		fr: "Courrier de Léo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez pas jouer cette carte si vous avez 5 cartes ou plus dans votre main (y compris celle-ci). Piochez des cartes jusqu'à ce que votre main soit de 4 cartes."
	}
}

export default card
