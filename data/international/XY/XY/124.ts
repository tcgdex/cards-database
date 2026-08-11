import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Red Card",
		'fr-fr': "Carton Rouge",
		'es-es': "Tarjeta Roja",
		'it-it': "Cartelrosso",
		'pt-br': "Cartão Vermelho",
		'de-de': "Rote Karte"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
		'en-us': "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
		'es-es': "Tu rival baraja las cartas de su mano en su baraja y roba 4 cartas.",
		'it-it': "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e poi pesca quattro carte.",
		'pt-br': "Seu oponente embaralha a mão no próprio deck e compra 4 cards.",
		'de-de': "Dein Gegner mischt seine Hand zurück in sein Deck und zieht 4 Karten."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281461,
		tcgplayer: 88655
	}
}

export default card
