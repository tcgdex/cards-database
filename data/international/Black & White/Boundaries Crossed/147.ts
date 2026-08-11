import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Bianca",
		'fr-fr': "Bianca",
		'es-es': "Bel",
		'it-it': "Belle",
		'pt-br': "Bianca",
		'de-de': "Bell"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main.",
		'en-us': "Draw cards until you have 6 cards in your hand.",
		'es-es': "Roba cartas hasta que tengas 6 cartas en tu mano.",
		'it-it': "Pesca fino ad avere sei carte in mano.",
		'pt-br': "Compre cards até ter 6 cards em sua mão.",
		'de-de': "Ziehe so viele Karten, bis du 6 Karten auf der Hand hast."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280734,
		tcgplayer: 83816
	}
}

export default card
