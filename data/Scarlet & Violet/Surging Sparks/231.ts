import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Drasna",
		fr: "Dracéna",
		es: "Drácena",
		it: "Lilia",
		pt: "Drasna",
		de: "Dracena"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, flip a coin. If heads, draw 8 cards. If tails, draw 3 cards.",
		fr: "Mélangez votre main avec votre deck. Ensuite, lancez une pièce. Si c'est face, piochez 8 cartes. Si c'est pile, piochez 3 cartes.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, lanza 1 moneda. Si sale cara, roba 8 cartas. Si sale cruz, roba 3 cartas.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi lancia una moneta. Se esce testa, pesca otto carte. Se esce croce, pescane tre.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, jogue uma moeda. Se sair cara, compre 8 cartas. Se sair coroa, compre 3 cartas.",
		de: "Mische deine Handkarten in dein Deck. Wirf anschließend 1 Münze. Ziehe bei Kopf 8 Karten. Ziehe bei Zahl 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Hideki Ishikawa"
}

export default card
