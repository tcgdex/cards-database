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

	rarity: "Special illustration rare",
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
				cardmarket: 751785,
				tcgplayer: 535104,
				cardtrader: 274422
			}
		},
	],

	illustrator: "aspara",

	
}

export default card
