import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Schoolboy",
		fr: "Écolier",
		es: "Estudiante ♂",
		it: "Studente",
		pt: "Aluno",
		de: "Schüler"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If your opponent has exactly 1, 3, or 5 Prize cards remaining, draw 2 more cards.",
		fr: "Piochez 2 cartes. S'il reste exactement 1, 3 ou 5 cartes Récompense à votre adversaire, piochez 2 cartes supplémentaires.",
		es: "Roba 2 cartas. Si a tu rival le quedan exactamente 1, 3 o 5 cartas de Premio, roba 2 cartas más.",
		it: "Pesca due carte. Se il tuo avversario ha esattamente una, tre o cinque carte Premio rimanenti, pesca altre due carte.",
		pt: "Compre 2 cartas. Se o seu oponente tiver exatamente 1, 3 ou 5 cartas de Prêmio restantes, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Wenn dein Gegner genau 1, 3 oder 5 verbleibende Preiskarten hat, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "E",
	illustrator: "kirisAki",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582974
	}
}

export default card