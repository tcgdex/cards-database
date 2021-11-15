import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Professor Cozmo's Discovery",
		fr: "La découverte du Professeur Kosmo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nLancez une pièce. Si c'est face, piochez les 3 cartes du dessous de votre deck. Si c'est pile, piochez les 2 cartes du dessus de votre deck."
	}
}

export default card
