import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

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
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nPiochez 3 cartes. Ensuite, défaussez n'importe quelle carte de votre main."
	}
}

export default card
