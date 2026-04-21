import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Katy",
		fr: "Éra",
		es: "Araceli",
		it: "Aceria",
		pt: "Catarina",
		de: "Ronah"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw 8 cards. Your turn ends.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 8 cartes. Votre tour se termine.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 8 cartas. Tu turno termina.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca otto carte. Il tuo turno finisce.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 8 cartas. O seu turno acaba.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 8 Karten. Dein Zug endet."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Akira Komayama",

	thirdParty: {
        cardmarket: 702473,
        tcgplayer: 488082
    }
}

export default card