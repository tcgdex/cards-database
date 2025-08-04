import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Surprise Box",
		fr: "Boîte Surprise",
		es: "Caja Sorpresa",
		it: "Scatola a Sorpresa",
		pt: "Caixa Surpresa",
		de: "Überraschungskiste"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez une carte de la pile de défausse de votre adversaire dans sa main.",
		en: "Put a card from your opponent’s discard pile into their hand.",
		es: "Pon 1 carta de la pila de descartes de tu rival en su mano.",
		it: "Prendi una carta dalla pila degli scarti del tuo avversario e aggiungila a quelle che ha in mano.",
		pt: "Coloque 1 carta da pilha de descarte do seu oponente na mão dele(a).",
		de: "Gib deinem Gegner 1 Karte aus seinem Ablagestapel auf seine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 372471,
		tcgplayer: 189296
	}
}

export default card
