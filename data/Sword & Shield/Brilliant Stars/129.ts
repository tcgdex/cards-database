import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Acerola's Premonition",
		fr: "Prémonition de Margie",
		es: "Presentimiento de Zarala",
		it: "Premonizione di Malpi",
		pt: "Premonição da Acerola",
		de: "Lolas Vorahnung"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Your opponent reveals their hand, and you draw a card for each Trainer card you find there.",
		fr: "Votre adversaire dévoile sa main. Piochez une carte pour chaque carte Dresseur que vous y trouvez.",
		es: "Tu rival enseña las cartas de su mano, y tú robas 1 carta por cada carta de Entrenador que encuentres entre ellas.",
		it: "Il tuo avversario mostra le carte che ha in mano e tu peschi una carta per ogni carta Allenatore presente tra quelle carte.",
		pt: "Seu oponente revela a própria mão e você compra 1 carta para cada carta de Treinador que encontrar lá.",
		de: "Dein Gegner zeigt dir seine Handkarten und du ziehst 1 Karte für jede Trainerkarte, die du dort findest."
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
		cardmarket: 608675
	}
}

export default card