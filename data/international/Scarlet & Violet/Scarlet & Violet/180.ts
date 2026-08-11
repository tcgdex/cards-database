import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

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
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Sanosuke Sakuma",

	thirdParty: {
        cardmarket: 702476,
        tcgplayer: 488086
    }
}

export default card