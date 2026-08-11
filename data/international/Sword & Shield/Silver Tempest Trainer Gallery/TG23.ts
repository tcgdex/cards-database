import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Friends in Galar",
		'fr-fr': "Amis de Galar",
		'es-es': "Amigos de Galar",
		'it-it': "Amici a Galar",
		'pt-br': "Amigos em Galar",
		'de-de': "Freunde aus Galar"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Full Art Trainer",
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
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682287,
				tcgplayer: 452039
			}
		},
	],
}

export default card
