import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "TV Reporter",
		fr: "Journaliste télé"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "Draw 3 cards. Then discard any 1 card from your hand.",
		fr: "Piochez 3 cartes. Ensuite, défaussez une carte de votre main.",
	},

	thirdParty: {
		cardmarket: 277442,
		tcgplayer: 90084
	}
}

export default card
