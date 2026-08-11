import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

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

	illustrator: "Yuu Nishida",
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
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608686,
				tcgplayer: 263862
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608686,
				tcgplayer: 263862
			}
		},
	],
}

export default card
