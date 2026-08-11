import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Dual Ball",
		fr: "Double boule",
		de: "Doppelter Ball"
	},

	illustrator: '"Big Mama" Tagawa',
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Flip 2 coins. For each heads, search your deck for a Basic Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		fr: "Lancez 2 pièces. Pour chaque face, cherchez dans votre deck un Pokémon de base, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		de: "Wirf zwei Münzen. Durchsuche dein Deck für jeden Kopf nach einer Basispokémonkarte und nimm sie auf die Hand. Mische dein Deck danach."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275849,
				tcgplayer: 84985
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275849,
				tcgplayer: 84985
			}
		},
	],

	retreat: 0
}

export default card
