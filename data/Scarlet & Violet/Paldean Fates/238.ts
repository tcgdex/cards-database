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

	rarity: "Special illustration rare",
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

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "aspara",

	thirdParty: {
		cardmarket: 751621
	}
}

export default card