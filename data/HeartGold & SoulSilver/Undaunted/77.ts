import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Sage’s Training",
		fr: "Entraînement de Sage",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez-en 2 et ajoutez-les à votre main. Défaussez les autres cartes.",
		en: "Look at the top 5 cards of your deck. Choose any 2 cards you find there and put them into your hand. Discard the other cards."
	},

	trainerType: "Supporter",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0
}

export default card
