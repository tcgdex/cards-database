import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Friends in Sinnoh",
		fr: "Amis de Sinnoh",
		es: "Amigos de Sinnoh",
		it: "Amici a Sinnoh",
		pt: "Amigos em Sinnoh",
		de: "Freunde aus Sinnoh"
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
	},

	thirdParty: {
		cardmarket: 691850
	}
}

export default card