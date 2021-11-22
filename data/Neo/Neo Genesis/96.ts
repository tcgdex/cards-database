import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Professor Elm",
		fr: "Professeur Orme"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 7 cartes. Vous ne pouvez plus jouer de cartes Dresseur pendant ce tour."
	}
}

export default card
