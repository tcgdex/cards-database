import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Wally's Training",
		fr: "Timmy au dressage"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck une carte qui évolue de votre Pokémon Actif (choisissez un Pokémon Actif si vous en avez deux) et placez-la sur ce Pokémon. (Vous le faites ainsi évoluer). Ensuite, mélangez votre deck."
	}
}

export default card
