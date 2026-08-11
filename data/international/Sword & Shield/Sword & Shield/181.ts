import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Rotom Bike",
		'fr-fr': "Moticyclette",
		'es-es': "Bici Rotom",
		'it-it': "Bici Rotom",
		'pt-br': "Bicicleta Rotom",
		'de-de': "Rotom-Rad"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Draw cards until you have 6 cards in your hand. Your turn ends.",
		'fr-fr': "Piochez des cartes jusqu'à en avoir 6 en main. Votre tour se termine.",
		'es-es': "Roba cartas hasta que tengas 6 cartas en tu mano. Tu turno termina.",
		'it-it': "Pesca fino ad avere sei carte in mano. Il tuo turno finisce.",
		'pt-br': "Compre cartas até ter 6 cartas na sua mão. O seu turno acaba.",
		'de-de': "Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast. Dein Zug endet."
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
