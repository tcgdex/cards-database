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

	rarity: "Ultra Rare",
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
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691849
	}
}

export default card