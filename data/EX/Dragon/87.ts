import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Mr. Briney's Compassion",
		fr: "La compassion de M. Briney"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nChoisissez un des Pokémon que vous avez en jeu (sauf les Pokémon-ex). Reprenez dans votre main ce Pokémon ainsi que toutes les cartes qui lui sont attachées."
	}
}

export default card
