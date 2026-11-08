import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Hand Scope",
		'fr-fr': "Scrute Main",
		'es-es': "Periscopio",
		'it-it': "Mirino Manuale",
		'pt-br': "Luneta",
		'de-de': "Handperiskop"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre adversaire montre sa main.",
		'en-us': "Your opponent reveals his or her hand.",
		'es-es': "Tu rival enseña las cartas de su mano.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano.",
		'pt-br': "Seu oponente revela a própria mão.",
		'de-de': "Dein Gegner deckt seine Handkarten auf."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281903,
		tcgplayer: 94664
	}
}

export default card
