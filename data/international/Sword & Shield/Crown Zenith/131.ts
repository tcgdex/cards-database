import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Friends in Sinnoh",
		'fr-fr': "Amis de Sinnoh",
		'es-es': "Amigos de Sinnoh",
		'it-it': "Amici a Sinnoh",
		'pt-br': "Amigos em Sinnoh",
		'de-de': "Freunde aus Sinnoh"
	},

	illustrator: "Ryuta Fuse",
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
				cardmarket: 691850,
				tcgplayer: 478182
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691850,
				tcgplayer: 478182
			}
		},
	],
}

export default card
