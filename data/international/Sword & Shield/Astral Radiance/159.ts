import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zisu",
		'fr-fr': "Bélila",
		'es-es': "Crispa",
		'it-it': "Lapilla",
		'pt-br': "Zisu",
		'de-de': "Belila"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw cards until you have 1 more card in your hand than your opponent.",
		'fr-fr': "Piochez des cartes jusqu'à en avoir une de plus dans votre main que votre adversaire.",
		'es-es': "Roba cartas hasta que tengas 1 carta más en tu mano que tu rival.",
		'it-it': "Pesca fino ad avere in mano una carta in più del tuo avversario.",
		'pt-br': "Compre cartas até ter 1 carta a mais na sua mão do que o seu oponente.",
		'de-de': "Ziehe so lange Karten, bis du 1 Karte mehr auf deiner Hand hast als dein Gegner."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658820,
				tcgplayer: 272411
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658820,
				tcgplayer: 272411
			}
		},
	],
}

export default card
