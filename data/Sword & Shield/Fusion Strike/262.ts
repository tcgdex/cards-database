import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Schoolgirl",
		fr: "Écolière",
		es: "Estudiante ♀",
		it: "Studentessa",
		pt: "Aluna",
		de: "Schülerin"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If your opponent has exactly 2, 4, or 6 Prize cards remaining, draw 2 more cards.",
		fr: "Piochez 2 cartes. S'il reste exactement 2, 4 ou 6 cartes Récompense à votre adversaire, piochez 2 cartes supplémentaires.",
		es: "Roba 2 cartas. Si a tu rival le quedan exactamente 2, 4 o 6 cartas de Premio, roba 2 cartas más.",
		it: "Pesca due carte. Se il tuo avversario ha esattamente due, quattro o sei carte Premio rimanenti, pesca altre due carte.",
		pt: "Compre 2 cartas. Se o seu oponente tiver exatamente 2, 4 ou 6 cartas de Prêmio restantes, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Wenn dein Gegner genau 2, 4 oder 6 verbleibende Preiskarten hat, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	illustrator: "Hideki Ishikawa",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582975
	}
}

export default card