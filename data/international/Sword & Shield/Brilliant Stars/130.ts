import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Barry",
		'fr-fr': "René",
		'es-es': "Israel",
		'it-it': "Barry",
		'pt-br': "Barry",
		'de-de': "Barry"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cartas.",
		'de-de': "Ziehe 3 Karten."
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
