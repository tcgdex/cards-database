import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Clive",
		fr: "Clove",
		es: "Cael",
		it: "Garoff",
		de: "Leval",
		pt: "Clive"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		en: "Your opponent reveals their hand, and you draw 2 cards for each Supporter card you find there.",
		fr: "Votre adversaire montre sa main et vous piochez 2 cartes pour chaque carte Supporter que vous y trouvez.",
		es: "Tu rival enseña las cartas de su mano, y tú robas 2 cartas por cada carta de Partidario que encuentres entre ellas.",
		it: "Il tuo avversario mostra le carte che ha in mano e tu peschi due carte per ogni carta Aiuto presente tra quelle carte.",
		de: "Dein Gegner zeigt dir seine Handkarten und du ziehst 2 Karten für jede Unterstützerkarte, die du dort findest.",
		pt: "Seu oponente revela a mão dele e você compra 2 cartas para cada carta de Apoiador que encontrar lá."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Taiga Kayama"
}

export default card