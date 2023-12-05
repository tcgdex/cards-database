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
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nPiochez trois cartes. Ensuite, défaussez une carte de votre main.",
		de: "Draw 3 cards. Then discard any 1 card from your hand."
	}
}

export default card
