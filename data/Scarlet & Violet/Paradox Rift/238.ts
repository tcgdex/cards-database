import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Parasol Lady",
		fr: "Sœur Parasol",
		es: "Dama Parasol",
		it: "Ombrellina",
		pt: "Dama de Sombrinha",
		de: "Schirmdame"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw 4 cards. If you go second and it's your first turn, draw 8 cards instead.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. Si vous jouez en second et que c'est votre premier tour, piochez 8 cartes à la place.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 4 cartas. Si sales en segundo lugar y es tu primer turno, roba 8 cartas en vez de 4.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca quattro carte. Se inizi per secondo ed è il tuo primo turno, invece pescane otto.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 4 cartas. Se você for o segundo a jogar e este for o seu primeiro turno, compre 8 cartas ao invés de 4.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 4 Karten. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, ziehe stattdessen 8 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Cona Nitanda",

	thirdParty: {
		cardmarket: 740711
	}
}

export default card