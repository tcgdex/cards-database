import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Friends in Hisui",
		fr: "Amis de Hisui",
		es: "Amigos de Hisui",
		it: "Amici a Hisui",
		pt: "Amigos em Hisui",
		de: "Freunde aus Hisui"
	},

	rarity: "Uncommon",
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
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card