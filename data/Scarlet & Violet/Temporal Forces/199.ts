import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Eri",
		fr: "Nèflie",
		es: "Erin",
		it: "Nespera",
		pt: "Êri",
		de: "Rioba"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Your opponent reveals their hand, and you discard up to 2 Item cards you find there.",
		fr: "Votre adversaire montre sa main et vous défaussez jusqu'à 2 cartes Objet que vous y trouvez.",
		es: "Tu rival enseña las cartas de su mano, y tú descartas hasta 2 cartas de Objeto que encuentres entre ellas.",
		it: "Il tuo avversario mostra le carte che ha in mano e tu scarti fino a due carte Strumento presenti tra quelle carte.",
		pt: "Seu oponente revela a mão dele e você descarta até 2 cartas de Item que encontrar lá.",
		de: "Dein Gegner zeigt dir seine Handkarten und du legst bis zu 2 Itemkarten, die du dort findest, auf seinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "GOSSAN",

	thirdParty: {
		cardmarket: 760829
	}
}

export default card