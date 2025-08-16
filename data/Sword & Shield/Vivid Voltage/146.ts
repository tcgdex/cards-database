import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Allister",
		fr: "Alistair",
		es: "Alistair",
		it: "Onion",
		pt: "Allister",
		de: "Nio"
	},

	illustrator: "take",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Draw 3 cards. If you drew any cards in this way, discard up to 3 cards from your hand. (You must discard at least 1 card.)",
		fr: "Piochez 3 cartes. Si vous avez pioché des cartes de cette façon, défaussez jusqu'à 3 cartes de votre main. (Vous devez défausser au moins une carte.)",
		es: "Roba 3 cartas. Si has robado alguna carta de esta manera, descarta hasta 3 cartas de tu mano. (Debes descartar por lo menos 1 carta).",
		it: "Pesca tre carte. Se hai pescato delle carte in questo modo, scarta fino a tre carte che hai in mano. Devi scartare almeno una carta.",
		pt: "Compre 3 cartas. Se você comprar qualquer carta desta forma, descarte até 3 cartas da sua mão (você deve descartar pelo menos 1 carta).",
		de: "Ziehe 3 Karten. Wenn du auf diese Weise mindestens 1 Karte gezogen hast, lege bis zu 3 Karten aus deiner Hand auf deinen Ablagestapel. (Du musst mindestens 1 Karte auf deinen Ablagestapel legen.)"
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 512440,
		tcgplayer: 226493
	}
}

export default card
