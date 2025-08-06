import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Hand Scope",
		fr: "Scrute Main",
		es: "Periscopio",
		it: "Mirino Manuale",
		pt: "Luneta",
		de: "Handperiskop"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire montre sa main.",
		en: "Your opponent reveals his or her hand.",
		es: "Tu rival enseña las cartas de su mano.",
		it: "Il tuo avversario mostra le carte che ha in mano.",
		pt: "Seu oponente revela a própria mão.",
		de: "Dein Gegner deckt seine Handkarten auf."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281903,
		tcgplayer: 94664
	}
}

export default card
