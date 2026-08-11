import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Energy Ark",
		fr: "Arche d'Énergie",
		de: "Energy Ark"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip 2 coins. For each heads, search your deck for a Basic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
		fr: "Lancez 2 pièces. Pour chaque face, cherchez dans votre deck une carte Énergie de base. Montrez cette carte à votre adversaire, puis placez-la dans votre main. Mélangez ensuite votre deck.",
		de: "Flip 2 coins. For each heads, search your deck for a Basic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274586,
				tcgplayer: 85209
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274586,
				tcgplayer: 85209
			}
		}
	]
}

export default card

