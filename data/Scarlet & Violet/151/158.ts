import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Aide de Nina",
		en: "Daisy's Help",
		es: "Ayuda de Dalia",
		it: "Aiuto di Margi",
		pt: "Ajuda da Daisy",
		de: "Sarahs Hilfe"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Piochez 2 cartes. Regardez vos cartes Récompense (actuellement face cachée).",
		en: "Draw 2 cards. Look at your face-down Prize cards.",
		es: "Roba 2 cartas. Mira tus cartas de Premio que están boca abajo.",
		it: "Pesca due carte. Guarda le tue carte Premio coperte.",
		pt: "Compre 2 cartas. Olhe as suas cartas de Prêmio viradas para baixo.",
		de: "Ziehe 2 Karten. Sieh dir deine verdeckten Preiskarten an."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tomomi Kaneko",

	thirdParty: {
		cardmarket: 733753
	}
}

export default card