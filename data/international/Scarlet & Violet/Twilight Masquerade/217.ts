import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Carmine",
		'fr-fr': "Roseille",
		'es-es': "Corin",
		'it-it': "Rubra",
		'pt-br': "Carmine",
		'de-de': "Hana"
	},

	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "If you go first, you may use this card during your first turn.\n\nDiscard your hand and draw 5 cards.",
		'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette carte pendant votre premier tour.\nDéfaussez votre main et piochez 5 cartes.",
		'es-es': "Si sales en primer lugar, puedes usar esta carta durante tu primer turno.\nDescarta las cartas de tu mano y roba 5 cartas.",
		'it-it': "Se inizi per primo, puoi usare questa carta durante il tuo primo turno.\n\nScarta le carte che hai in mano e pesca cinque carte.",
		'pt-br': "Se você for o primeiro a jogar, poderá usar esta carta durante o seu primeiro turno.\nDescarte a sua mão e compre 5 cartas.",
		'de-de': "Wenn du als Erster am Zug bist, kannst du diese Karte während deines ersten Zuges einsetzen.\nLege deine Handkarten auf deinen Ablagestapel und ziehe 5 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769391,
				tcgplayer: 550261
			}
		},
	],

	illustrator: "En Morikura",

}

export default card