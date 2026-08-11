import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cheren",
		'fr-fr': "Tcheren",
		'de-de': "Cheren",
		'it-it': "Komor",
		'pt-br': "Cheren",
		'es-es': "Cheren",
		'es-mx': "Cheren"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'de-de': "Ziehe 3 Karten.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cartas.",
		'es-es': "Roba 3 cartas.",
		'es-mx': "Roba 3 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836053,
				tcgplayer: 642199
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836053,
				tcgplayer: 642199
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836642,
				tcgplayer: 645196
			}
		},
	],
}

export default card
