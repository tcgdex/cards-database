import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Professor Elm",
		fr: "Professeur Orme",
		de: "Professor Lind"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 7 cartes. Vous ne pouvez plus jouer de cartes Dresseur pendant ce tour.",
		de: "Mische deine Hand in dein Deck. Ziehe dann sieben Karten. Du kannst in diesem Zug keine weiteren Trainerkarten mehr spielen."
	},

	thirdParty: {
		cardmarket: 274496,
		tcgplayer: 88388
	}
}

export default card
