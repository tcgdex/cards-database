import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Master Ball",
		fr: "Master ball",
		de: "Meisterball"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Parmi ces cartes, vous pouvez choisir une carte de Pokémon de base ou d'Évolution. Montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez le reste à votre deck.",
		de: "Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it your opponent, and put it into your hand. Shuffle the rest into your deck."
	},

	thirdParty: {
		cardmarket: 275018,
		tcgplayer: 87252
	}
}

export default card
