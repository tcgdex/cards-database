import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hop",
		'fr-fr': "Nabil",
		'es-es': "Paul",
		'it-it': "Hop",
		'pt-br': "Lupo",
		'de-de': "Hop"
	},

	illustrator: "Taira Akitsu",
	rarity: "Holo Rare",
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
	regulationMark: "D",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691852,
				tcgplayer: 478186
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691852,
				tcgplayer: 478186
			}
		},
	],
}

export default card
