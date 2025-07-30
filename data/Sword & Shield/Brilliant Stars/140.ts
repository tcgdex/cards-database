import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Friends in Galar",
		fr: "Amis de Galar",
		es: "Amigos de Galar",
		it: "Amici a Galar",
		pt: "Amigos em Galar",
		de: "Freunde aus Galar"
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
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608686
	}
}

export default card