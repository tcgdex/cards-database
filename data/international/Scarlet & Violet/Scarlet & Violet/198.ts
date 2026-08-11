import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Youngster",
		'fr-fr': "Gamin",
		'es-es': "Joven",
		'it-it': "Marmocchio",
		'pt-br': "Jovem",
		'de-de': "Knirps"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle your hand into your deck. Then, draw 5 cards.",
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 5 cartas.",
		'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca cinque carte.",
		'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 5 cartas.",
		'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Hitoshi Ariga",

	thirdParty: {
        cardmarket: 702494,
        tcgplayer: 488108
    }
}

export default card