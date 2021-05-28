import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Energy Search",
		fr: "Recherche d’Énergie",
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your deck for a basic Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck une carte Énergie de base, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card
