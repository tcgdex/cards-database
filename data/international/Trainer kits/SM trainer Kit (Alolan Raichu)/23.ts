import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hau",
		'fr-fr': "Tili",
		'es-es': "Tilo",
		'it-it': "Hau",
		'pt-br': "Hibi",
		'de-de': "Tali"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297257,
				tcgplayer: 152843
			}
		},
	],

}

export default card