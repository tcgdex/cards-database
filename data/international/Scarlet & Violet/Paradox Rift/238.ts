import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Parasol Lady",
		'fr-fr': "Sœur Parasol",
		'es-es': "Dama Parasol",
		'it-it': "Ombrellina",
		'pt-br': "Dama de Sombrinha",
		'de-de': "Schirmdame"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle your hand into your deck. Then, draw 4 cards. If you go second and it's your first turn, draw 8 cards instead.",
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. Si vous jouez en second et que c'est votre premier tour, piochez 8 cartes à la place.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 4 cartas. Si sales en segundo lugar y es tu primer turno, roba 8 cartas en vez de 4.",
		'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca quattro carte. Se inizi per secondo ed è il tuo primo turno, invece pescane otto.",
		'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 4 cartas. Se você for o segundo a jogar e este for o seu primeiro turno, compre 8 cartas ao invés de 4.",
		'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 4 Karten. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, ziehe stattdessen 8 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740781,
				tcgplayer: 523919,
				cardtrader: 265361
			}
		},
	],

	illustrator: "Cona Nitanda",

	
}

export default card
