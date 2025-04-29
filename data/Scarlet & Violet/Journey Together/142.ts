import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Billy & O'Nare",
		fr: "Milio et Naire",
		es: "Ricardo y Enrica",
		de: "Billy & Onea",
		it: "Nab e Abby",
		pt: "Abílio e Onara",
		'es-mx': "Ricardo y Enrica"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. Then, if you have 10 or more cards in your hand, draw 2 more cards.",
		fr: "Piochez 2 cartes. Ensuite, si vous avez 10 cartes ou plus dans votre main, piochez 2 cartes supplémentaires.",
		es: "Roba 2 cartas. Después, si tienes 10 cartas o más en tu mano, roba 2 cartas más.",
		de: "Ziehe 2 Karten. Wenn du anschließend 10 oder mehr Karten auf deiner Hand hast, ziehe 2 Karten mehr.",
		it: "Pesca due carte. Poi, se hai 10 o più carte in mano, pescane altre due.",
		pt: "Compre 2 cartas. Em seguida, se você tiver 10 ou mais cartas na sua mão, compre 2 cartas a mais.",
		'es-mx': "Roba 2 cartas. Después, si tienes 10 cartas o más en tu mano, roba 2 cartas más."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
