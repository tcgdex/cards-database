import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Mary",
		fr: "Lula",
		de: "Margit"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Draw 2 cards. Then, shuffle 2 cards from your hand into your deck.",
		fr: "Piochez 2 cartes. Ensuite, mélangez 2 cartes de votre main avec votre deck.",
		de: "Draw 2 cards. Then, shuffle 2 cards from your hand into your deck."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274487,
				tcgplayer: 87241
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274487,
				tcgplayer: 87241
			}
		}
	]
}

export default card
