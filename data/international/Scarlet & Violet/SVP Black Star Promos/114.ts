import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Picnicker",
		'fr-fr': "Fan de Pique-Nique",
		'es-es': "Dominguera",
		'it-it': "Fan dei picnic",
		'pt-br': "Fã de Piquenique",
		'de-de': "Picknickerin"
	},

	rarity: "Promo",
	category: "Trainer",

	effect: {
		'en-us': "Flip a coin. If heads, draw 4 cards. If tails, draw 2 cards.",
		'fr-fr': "Lancez une pièce. Si c'est face, piochez 4 cartes. Si c'est pile, piochez 2 cartes.",
		'es-es': "Lanza 1 moneda. Si sale cara, roba 4 cartas. Si sale cruz, roba 2 cartas.",
		'it-it': "Lancia una moneta. Se esce testa, pesca quattro carte. Se esce croce, pesca due carte.",
		'pt-br': "Jogue uma moeda. Se sair cara, compre 4 cartas. Se sair coroa, compre 2 cartas.",
		'de-de': "Wirf 1 Münze. Ziehe bei Kopf 4 Karten. Ziehe bei Zahl 2 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "H",
	illustrator: "Susumu Maeya",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769410,
				tcgplayer: 551687
			},
		}
	],
}

export default card
