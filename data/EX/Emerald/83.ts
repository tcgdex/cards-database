import { Card } from '../../../interfaces'
import Set from '../Emerald'

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
		fr: "Choisissez 1 de vos Pokémon de base en jeu. Si vous possédez dans votre main une carte Niveau 1 ou Niveau 2 qui évolue de ce Pokémon, placez cette carte sur le Pokémon de base. (Vous le faites ainsi évoluer)."
	}
}

export default card
