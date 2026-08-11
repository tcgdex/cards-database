import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Bicycle",
		'fr-fr': "Bicyclette",
		'es-es': "Bici",
		'it-it': "Bicicletta",
		'pt-br': "Bicicleta",
		'de-de': "Fahrrad"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 4 cartes en main.",
		'en-us': "Draw cards until you have 4 cards in your hand.",
		'es-es': "Roba cartas hasta que tengas 4 cartas en tu mano.",
		'it-it': "Pesca fino ad avere quattro carte in mano.",
		'pt-br': "Compre cards até ter 4 cards em sua mão.",
		'de-de': "Ziehe so viele Karten, bis du 4 Karten auf der Hand hast."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280857,
		tcgplayer: 83823
	}
}

export default card
