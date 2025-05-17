import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Red Card",
		fr: "Carton Rouge",
		es: "Tarjeta Roja",
		it: "Cartelrosso",
		de: "Rote Karte",
		'pt-br': "Cartão Vermelho",
		ko: "레드카드"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",

	effect: {
		en: "Your opponent shuffles their hand into their deck and draws 3 cards.",
		fr: "Votre adversaire mélange sa main dans son deck et pioche 3 cartes.",
		es: "Tu rival pone las cartas de su mano en su baraja, las baraja todas y roba 3 cartas.",
		it: "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e poi pesca 3 carte.",
		de: "Dein Gegner mischt seine Handkarten in sein Deck und zieht 3 Karten.",
		
		ko: "상대의 패를 모두 덱으로 되돌린다. 상대는 덱을 3장 뽑는다.",
		'pt-br': "Seu oponente embaralha a mão dele no baralho dele e compra 3 cartas."
	},

	trainerType: "Item",
	boosters: []
}

export default card
