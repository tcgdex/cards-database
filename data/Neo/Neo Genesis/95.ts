import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "New Pokédex",
		fr: "Nouveau Pokédex",
		de: "Neuer Pokedex"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre deck. Ensuite, regardez jusqu'à 5 cartes du dessus de votre deck et ordonnez-les comme bon vous semble.",
		de: "Shuffle your deck. Then, look at up to 5 cards from the top of your deck and rearrange them as you like."
	}
}

export default card
