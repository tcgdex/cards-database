import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Barry",
		fr: "René",
		es: "Israel",
		it: "Barry",
		pt: "Barry",
		de: "Barry"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 3 cards.",
		fr: "Piochez 3 cartes.",
		es: "Roba 3 cartas.",
		it: "Pesca tre carte.",
		pt: "Compre 3 cartas.",
		de: "Ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608676,
				tcgplayer: 263853
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608676,
				tcgplayer: 263853
			}
		},
	],
}

export default card
