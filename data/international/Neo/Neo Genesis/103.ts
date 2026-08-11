import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Super Rod",
		fr: "Méga Canne",
		de: "Super-Angel"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, put an Evolution card from your discard pile, if any, into your hand. If tails, put a Basic Pokémon card from your discard pile, if any, into your hand.",
		fr: "Lancez une pièce. Si c'est face, déplacez une carte Évolution (s'il y en a) de votre pile de défausse vers votre main. Si c'est pile, déplacez une carte Pokémon de base (s'il y en a) de votre pile de défausse vers votre main.",
		de: "Wirf eine Münze. Bei 'Kopf' nimm eine Evolutionskarte aus deinem Ablagestapel auf deine Hand, wenn dort eine ist. Bei 'Zahl' nimm eine Basis-Pokémonkarte aus deinem Ablagestapel auf deine Hand, wenn dort eine ist."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274503,
				tcgplayer: 89633
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274503,
				tcgplayer: 89633
			}
		}
	]
}

export default card
