import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Rare Candy",
		fr: "Super bonbon"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Choisissez un des Pokémon de base que vous avez en jeu. Si vous avez dans votre main une carte Niveau 1 ou Niveau 2 qui évolue de ce Pokémon, placez-la sur ce Pokémon. (Vous le faites ainsi évoluer)."
	}
}

export default card
