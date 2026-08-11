import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wallace",
		'fr-fr': "Marc",
		'es-es': "Plubio",
		'it-it': "Adriano",
		'pt-br': "Wallace",
		'de-de': "Wassili"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards. Your opponent may draw a card. If they do, draw 1 more card.",
		'fr-fr': "Piochez 3 cartes. Votre adversaire peut piocher une carte. Dans ce cas, piochez une carte supplémentaire.",
		'es-es': "Roba 3 cartas. Tu rival puede robar 1 carta. Si lo hace, robas 1 carta más.",
		'it-it': "Pesca tre carte. Il tuo avversario può pescare una carta. Se lo fa, peschi un'altra carta.",
		'pt-br': "Compre 3 cartas. Seu oponente pode comprar 1 carta. Se ele(a) fizer isto, compre 1 carta a mais.",
		'de-de': "Ziehe 3 Karten. Dein Gegner kann 1 Karte ziehen. Wenn er das macht, ziehe 1 Karte mehr."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682213,
				tcgplayer: 451814
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682213,
				tcgplayer: 451814
			}
		},
	],
}

export default card
