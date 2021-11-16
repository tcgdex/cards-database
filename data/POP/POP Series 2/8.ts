import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Mr. Briney’s Compassion",
		fr: "La compassion de M. Briney"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "Choose 1 of your Pokémon in play (excluding Pokémon-ex). Return that Pokémon and all cards attached to it to your hand.",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez 1 des Pokémon que vous avez en jeu (sauf les Pokémon-ex). Reprenez dans votre main ce Pokémon ainsi que toutes les cartes qui lui sont attachées."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
