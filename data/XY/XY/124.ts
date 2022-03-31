import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Red Card",
		fr: "Carton Rouge",
		es: "Tarjeta Roja",
		it: "Cartelrosso",
		pt: "Cartão Vermelho",
		de: "Rote Karte"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
		en: "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
		es: "Tu rival baraja las cartas de su mano en su baraja y roba 4 cartas.",
		it: "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e poi pesca quattro carte.",
		pt: "Seu oponente embaralha a mão no próprio deck e compra 4 cards.",
		de: "Dein Gegner mischt seine Hand zurück in sein Deck und zieht 4 Karten."
	},
	trainerType: "Item",

}

export default card
