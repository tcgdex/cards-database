import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cheren",
		'fr-fr': "Tcheren",
		'es-es': "Cheren",
		'es-mx': "Cheren",
		'de-de': "Cheren",
		'it-it': "Komor",
		'pt-br': "Cheren"
	},

	illustrator: "REND",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'es-mx': "Roba 3 cartas.",
		'de-de': "Ziehe 3 Karten.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869869,
				tcgplayer: 676070
			}
		}
	],
}

export default card