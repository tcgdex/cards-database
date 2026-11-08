import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Aide de Nina",
		'en-us': "Daisy's Help",
		'es-es': "Ayuda de Dalia",
		'it-it': "Aiuto di Margi",
		'pt-br': "Ajuda da Daisy",
		'de-de': "Sarahs Hilfe"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Piochez 2 cartes. Regardez vos cartes Récompense (actuellement face cachée).",
		'en-us': "Draw 2 cards. Look at your face-down Prize cards.",
		'es-es': "Roba 2 cartas. Mira tus cartas de Premio que están boca abajo.",
		'it-it': "Pesca due carte. Guarda le tue carte Premio coperte.",
		'pt-br': "Compre 2 cartas. Olhe as suas cartas de Prêmio viradas para baixo.",
		'de-de': "Ziehe 2 Karten. Sieh dir deine verdeckten Preiskarten an."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733790,
				tcgplayer: 517042,
				cardtrader: 261280
			}
		},
	],

	illustrator: "Fumie Kittaka",

	
}

export default card
