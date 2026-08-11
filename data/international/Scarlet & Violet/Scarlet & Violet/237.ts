import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Katy",
		'fr-fr': "Éra",
		'es-es': "Araceli",
		'it-it': "Aceria",
		'pt-br': "Catarina",
		'de-de': "Ronah"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle your hand into your deck. Then, draw 8 cards. Your turn ends.",
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 8 cartes. Votre tour se termine.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 8 cartas. Tu turno termina.",
		'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca otto carte. Il tuo turno finisce.",
		'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 8 cartas. O seu turno acaba.",
		'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 8 Karten. Dein Zug endet."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Akira Komayama",

	thirdParty: {
        cardmarket: 702533,
        tcgplayer: 490095
    }
}

export default card