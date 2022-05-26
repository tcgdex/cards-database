import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Zisu",
		fr: "Bélila",
		es: "Crispa",
		it: "Lapilla",
		pt: "Zisu",
		de: "Belila"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw cards until you have 1 more card in your hand than your opponent.",
		fr: "Piochez des cartes jusqu'à en avoir une de plus dans votre main que votre adversaire.",
		es: "Roba cartas hasta que tengas 1 carta más en tu mano que tu rival.",
		it: "Pesca fino ad avere in mano una carta in più del tuo avversario.",
		pt: "Compre cartas até ter 1 carta a mais na sua mão do que o seu oponente.",
		de: "Ziehe so lange Karten, bis du 1 Karte mehr auf deiner Hand hast als dein Gegner."
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