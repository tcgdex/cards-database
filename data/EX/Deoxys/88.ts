import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Master Ball",
		fr: "Master Ball",
		de: "Meisterball"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Regardez les 7 cartes du dessus de votre deck. Parmi ces cartes, vous pouvez choisir une carte Pokémon de base ou une carte Évolution. Montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez le reste à votre deck.",
		de: "Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it yout opponent, and put it into your hand. Shuffle the rest into your deck."
	}
}

export default card
