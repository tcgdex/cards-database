import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Ortega",
		fr: "Ortiga",
		es: "Gus",
		pt: "Ortega",
		it: "Ortiz",
		de: "Otis"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Your opponent reveals their hand, and you choose a card you find there and put it on the bottom of their deck. If you put a card on the bottom of your opponent's deck in this way, your opponent may draw a card.",
		fr: "Votre adversaire montre sa main. Choisissez-y une carte, puis placez-la en dessous de son deck. Si vous placez une carte en dessous du deck de votre adversaire de cette façon, votre adversaire peut piocher une carte.",
		es: "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja. Si has puesto una carta en la parte inferior de la baraja de tu rival de esta manera, tu rival puede robar 1 carta.",
		pt: "Seu oponente revela a mão dele, e você escolhe uma carta que encontrar lá e a coloca como a carta de baixo do baralho dele. Se você colocou uma carta como a carta de baixo do baralho do seu oponente desta forma, seu oponente poderá comprar uma carta.",
		it: "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo. Se hai messo una carta in fondo al mazzo del tuo avversario in questo modo, il tuo avversario può pescare una carta.",
		de: "Dein Gegner zeigt dir seine Handkarten und du wählst 1 Karte, die du dort findest, und legst sie unter sein Deck. Wenn du auf diese Weise 1 Karte unter das Deck deines Gegners gelegt hast, kann dein Gegner 1 Karte ziehen."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Teeziro"
}

export default card