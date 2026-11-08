import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Carmine",
		'fr-fr': "Roseille",
		'es-es': "Corin",
		'pt-br': "Carmine",
		'it-it': "Rubra",
		'de-de': "Hana"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "If you go first, you may use this card during your first turn.\n\nDiscard your hand and draw 5 cards.",
		'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette carte pendant votre premier tour.\n\nDéfaussez votre main et piochez 5 cartes.",
		'es-es': "Si sales en primer lugar, puedes usar esta carta durante tu primer turno.\n\nDescarta las cartas de tu mano y roba 5 cartas.",
		'pt-br': "Se você for o primeiro a jogar, poderá usar esta carta durante o seu primeiro turno.\n\nDescarte a sua mão e compre 5 cartas.",
		'it-it': "Se inizi per primo, puoi usare questa carta durante il tuo primo turno.\n\nScarta le carte che hai in mano e pesca cinque carte.",
		'de-de': "Wenn du als Erster am Zug bist, kannst du diese Karte während deines ersten Zuges einsetzen.\n\nLege deine Handkarten auf deinen Ablagestapel und ziehe 5 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "H",
	illustrator: "kantaro",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805497,
				tcgplayer: 610458
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805497,
				tcgplayer: 610458
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806562,
				tcgplayer: 610614
			}
		},
	],
}

export default card
