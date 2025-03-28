import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Amarys",
		fr: "Nérine",
		es: "Nerina",
		pt: "Amarílis",
		it: "Erin",
		de: "Erin"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Draw 4 cards. At the end of this turn, if you have 5 or more cards in your hand, discard your hand.",
		fr: "Piochez 4 cartes. À la fin de ce tour, si vous avez 5 cartes ou plus dans votre main, défaussez votre main.",
		es: "Roba 4 cartas. Al final de este turno, si tienes 5 cartas o más en tu mano, descarta las cartas de tu mano.",
		pt: "Compre 4 cartas. No final deste turno, se você tiver 5 ou mais cartas na sua mão, descarte a sua mão.",
		it: "Pesca quattro carte. Alla fine di questo turno, se hai cinque o più carte in mano, scarta le carte che hai in mano.",
		de: "Ziehe 4 Karten. Am Ende dieses Zuges, wenn du 5 oder mehr Karten auf deiner Hand hast, lege deine Handkarten auf deinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card