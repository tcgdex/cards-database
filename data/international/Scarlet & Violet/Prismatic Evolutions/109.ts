import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Friends in Paldea",
		'fr-fr': "Amis de Paldea",
		'es-es': "Amigos de Paldea",
		'pt-br': "Amigos em Paldea",
		'it-it': "Amici a Paldea",
		'de-de': "Freunde aus Paldea"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'pt-br': "Compre 3 cartas.",
		'it-it': "Pesca tre carte.",
		'de-de': "Ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "H",
	illustrator: "Cona Nitanda",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805503,
				tcgplayer: 610464
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805503,
				tcgplayer: 610464
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806574,
				tcgplayer: 610620
			}
		},
	],
}

export default card
