import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nemona",
		'fr-fr': "Menzi",
		'es-es': "Mencía",
		'it-it': "Nemi",
		'pt-br': "Noêmia",
		'de-de': "Nemila"
	},

	rarity: "Common",
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
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751621,
				tcgplayer: 534444,
				cardtrader: 274266
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751621,
				tcgplayer: 534444,
				cardtrader: 274266
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

	
}

export default card
