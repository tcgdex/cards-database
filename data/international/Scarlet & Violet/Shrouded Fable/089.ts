import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Xerosic's Machinations",
		'fr-fr': "Machinations de Xanthin",
		'es-es': "Maquinaciones de Xero",
		'it-it': "Macchinazioni di Xante",
		'pt-br': "Tramoias do Xerosic",
		'de-de': "Xeros' Machinationen"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Your opponent discards cards from their hand until they have 3 cards in their hand.",
		'fr-fr': "Votre adversaire défausse des cartes de sa main jusqu'à en avoir 3 en main.",
		'es-es': "Tu rival descarta cartas de su mano hasta que tenga 3 cartas en su mano.",
		'it-it': "Il tuo avversario scarta delle carte che ha in mano fino ad averne tre in mano.",
		'pt-br': "Seu oponente descarta cartas da mão dele até ter 3 cartas na mão dele.",
		'de-de': "Dein Gegner legt so lange Karten aus seiner Hand auf seinen Ablagestapel, bis er 3 Karten auf seiner Hand hat."
	},

	trainerType: "Supporter",
	regulationMark: "H",


	illustrator: "GOSSAN",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780984,
				tcgplayer: 560400
			}
		},
	],
}

export default card
