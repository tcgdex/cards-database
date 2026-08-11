import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Urbain",
		'fr-fr': "Boro",
		'es-es': "Urbi",
		'es-mx': "Vinci",
		'de-de': "Alton",
		'it-it': "Ryon",
		'pt-br': "Urbano"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'es-mx': "Roba 3 cartas.",
		'de-de': "Ziehe 3 Karten.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869825,
			tcgplayer: 676026
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869825,
			tcgplayer: 676026
		}
	},
],
}

export default card