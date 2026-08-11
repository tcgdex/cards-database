import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nemona",
		'fr-fr': "Menzi",
		'es-es': "Mencía",
		'it-it': "Nemi",
		'de-de': "Nemila",
		'pt-br': "Noêmia"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'de-de': "Ziehe 3 Karten.",
		'pt-br': "Compre 3 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751776,
				tcgplayer: 534754,
				cardtrader: 274413
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

	
}

export default card
