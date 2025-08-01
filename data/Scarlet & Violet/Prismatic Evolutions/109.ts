import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Friends in Paldea",
		fr: "Amis de Paldea",
		es: "Amigos de Paldea",
		pt: "Amigos em Paldea",
		it: "Amici a Paldea",
		de: "Freunde aus Paldea"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Draw 3 cards.",
		fr: "Piochez 3 cartes.",
		es: "Roba 3 cartas.",
		pt: "Compre 3 cartas.",
		it: "Pesca tre carte.",
		de: "Ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "H",
	illustrator: "Cona Nitanda",

	thirdParty: {
		cardmarket: 805503
	}
}

export default card