import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Nemona",
		fr: "Menzi",
		es: "Mencía",
		it: "Nemi",
		de: "Nemila",
		pt: "Noêmia"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Draw 3 cards.",
		fr: "Piochez 3 cartes.",
		es: "Roba 3 cartas.",
		it: "Pesca tre carte.",
		de: "Ziehe 3 Karten.",
		pt: "Compre 3 cartas."
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
