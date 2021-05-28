import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
		fr: "Lancez une pièce. Si c’est face, échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif."
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
