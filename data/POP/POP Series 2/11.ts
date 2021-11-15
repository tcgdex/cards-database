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
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nPiochez 3 cartes. Ensuite, défaussez une carte de votre main."
	}
}

export default card
