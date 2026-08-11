import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Friends in Hisui",
		'fr-fr': "Amis de Hisui",
		'es-es': "Amigos de Hisui",
		'it-it': "Amici a Hisui",
		'pt-br': "Amigos em Hisui",
		'de-de': "Freunde aus Hisui"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cartas.",
		'de-de': "Ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691849,
				tcgplayer: 478181
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691849,
				tcgplayer: 478181
			}
		},
	],
}

export default card
