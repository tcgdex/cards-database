import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rotom Bike",
		fr: "Moticyclette",
		es: "Bici Rotom",
		it: "Bici Rotom",
		pt: "Bicicleta Rotom",
		de: "Rotom-Rad"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Draw cards until you have 6 cards in your hand. Your turn ends.",
		fr: "Piochez des cartes jusqu'à en avoir 6 en main. Votre tour se termine.",
		es: "Roba cartas hasta que tengas 6 cartas en tu mano. Tu turno termina.",
		it: "Pesca fino ad avere sei carte in mano. Il tuo turno finisce.",
		pt: "Compre cartas até ter 6 cartas na sua mão. O seu turno acaba.",
		de: "Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast. Dein Zug endet."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436999,
		tcgplayer: 208514
	}
}

export default card
