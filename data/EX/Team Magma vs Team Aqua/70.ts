import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma Schemer",
		fr: "Manipulateur de Team Magma"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la.\n\nDéfaussez 1 Pokémon de votre main. Ensuite, piochez 3 cartes. Si vous avez défaussé un Pokémon dont le nom comporte Team Magma, piochez 4 cartes."
	}
}

export default card
