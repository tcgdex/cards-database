import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Nemona",
		fr: "Menzi",
		es: "Mencía",
		it: "Nemi",
		pt: "Noêmia",
		de: "Nemila"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Draw 3 cards.",
		fr: "Piochez 3 cartes.",
		es: "Roba 3 cartas.",
		it: "Pesca tre carte.",
		pt: "Compre 3 cartas.",
		de: "Ziehe 3 Karten."
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
