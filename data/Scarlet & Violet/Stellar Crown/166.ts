import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Lacey",
		fr: "Taro",
		es: "Aroa",
		it: "Rupi",
		pt: "Tarsila",
		de: "Tara"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw 4 cards. If your opponent has 3 or fewer Prize cards remaining, draw 8 cards instead.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. S'il reste 3 cartes Récompense ou moins à votre adversaire, piochez 8 cartes à la place.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 4 cartas. Si a tu rival le quedan 3 cartas de Premio o menos, roba 8 cartas en vez de 4.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca quattro carte. Se il tuo avversario ha tre o meno carte Premio rimanenti, invece pescane otto.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 4 cartas. Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, compre 8 cartas ao invés de 4.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 4 Karten. Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, ziehe stattdessen 8 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
