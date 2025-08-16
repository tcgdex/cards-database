import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

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

	rarity: "Full Art Trainer",
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
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682287
	}
}

export default card
