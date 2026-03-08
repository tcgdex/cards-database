import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Dual Ball",
		fr: "Double boule",
		de: "Doppelter Ball"
	},

	illustrator: "Big Mama\" Tagawa\"",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez 2 pièces. Pour chaque face, cherchez dans votre deck un Pokémon de base, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		de: "Wirf zwei Münzen. Durchsuche dein Deck für jeden Kopf nach einer Basispokémonkarte und nimm sie auf die Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 276049,
		tcgplayer: 84985
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
