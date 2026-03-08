import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Sage’s Training",
		fr: "Entraînement de Sage",
		de: "Training des Weisen"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez-en 2 et ajoutez-les à votre main. Défaussez les autres cartes.",
		en: "Look at the top 5 cards of your deck. Choose any 2 cards you find there and put them into your hand. Discard the other cards.",
		de: "Schau dir die obersten 5 Karten deines Decks an. Wähle 2 beliebige der gefundenen Karten und nimm sie auf die Hand. Lege die anderen Karten auf deinen Ablagestapel."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["christopher-kan"]
		}
	],

	hp: 0
}

export default card
