import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Dusk Ball",
		fr: "Sombre Ball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Regardez les 7 cartes du dessous de votre deck. Choisissez-y 1 Pokémon, montrez-le à votre adversaire et placez-le dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck."
	}
}

export default card
