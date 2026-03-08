import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Poké Ball",
		fr: "Poké Ball",
		de: "Poké Ball"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck un Pokémon de base ou une carte Évolution, montrez-le (ou la) à votre adversaire et placez-le (ou la) dans votre main. Ensuite, mélangez votre deck.",
		de: "Flip a coin. If heads, search your deck for a Basic Pokémon or Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},

	thirdParty: {
		cardmarket: 276733
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
