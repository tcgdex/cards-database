import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Wallace",
		fr: "Marc",
		es: "Plubio",
		it: "Adriano",
		pt: "Wallace",
		de: "Wassili"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Draw 3 cards. Your opponent may draw a card. If they do, draw 1 more card.",
		fr: "Piochez 3 cartes. Votre adversaire peut piocher une carte. Dans ce cas, piochez une carte supplémentaire.",
		es: "Roba 3 cartas. Tu rival puede robar 1 carta. Si lo hace, robas 1 carta más.",
		it: "Pesca tre carte. Il tuo avversario può pescare una carta. Se lo fa, peschi un'altra carta.",
		pt: "Compre 3 cartas. Seu oponente pode comprar 1 carta. Se ele(a) fizer isto, compre 1 carta a mais.",
		de: "Ziehe 3 Karten. Dein Gegner kann 1 Karte ziehen. Wenn er das macht, ziehe 1 Karte mehr."
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card