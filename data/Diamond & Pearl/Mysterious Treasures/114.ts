import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Quick Ball",
		fr: "Rapide Ball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Vous ne pouvez jouer cette carte que si vous défaussez une autre carte de votre main. Cherchez dans votre deck un Pokémon de base, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.[1]"
	}
}

export default card
