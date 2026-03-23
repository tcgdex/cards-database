import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "TV Reporter",
		fr: "Journaliste télé",
		de: "TV Reporter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Piochez trois cartes. Ensuite, défaussez une carte de votre main.",
		de: "Draw 3 cards. Then discard any 1 card from your hand.",
	},

	thirdParty: {
		tcgplayer: 90083,
		cardmarket: 275965
	}
}

export default card
