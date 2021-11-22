import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma Ball",
		fr: "Boule de Team Magma"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon dont le nom comporte Team Magma, montrez-le à votre adversaire et placez-le dans votre main. Si c'est pile, cherchez dans votre deck un Pokémon de base dont le nom comporte Team Magma, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck."
	}
}

export default card
