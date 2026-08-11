import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Amarys",
		'fr-fr': "Nérine",
		'es-es': "Nerina",
		'pt-br': "Amarílis",
		'it-it': "Erin",
		'de-de': "Erin"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw 4 cards. At the end of this turn, if you have 5 or more cards in your hand, discard your hand.",
		'fr-fr': "Piochez 4 cartes. À la fin de ce tour, si vous avez 5 cartes ou plus dans votre main, défaussez votre main.",
		'es-es': "Roba 4 cartas. Al final de este turno, si tienes 5 cartas o más en tu mano, descarta las cartas de tu mano.",
		'pt-br': "Compre 4 cartas. No final deste turno, se você tiver 5 ou mais cartas na sua mão, descarte a sua mão.",
		'it-it': "Pesca quattro carte. Alla fine di questo turno, se hai cinque o più carte in mano, scarta le carte che hai in mano.",
		'de-de': "Ziehe 4 Karten. Am Ende dieses Zuges, wenn du 5 oder mehr Karten auf deiner Hand hast, lege deine Handkarten auf deinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	illustrator: "Tomowaka",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805564,
				tcgplayer: 610525
			}
		},
	],
}

export default card
