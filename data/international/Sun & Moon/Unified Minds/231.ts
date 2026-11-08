import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Blue’s Tactics",
		'fr-fr': "Tactiques de Blue",
		'es-es': "Tácticas de Azul",
		'it-it': "Tattica di Blu",
		'pt-br': "Tática do Blue",
		'de-de': "Blaus Taktik"
	},
	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "À la fin de ce tour, piochez des cartes jusqu’à ce que vous ayez 8 cartes en main.",
		'en-us': "At the end of this turn, draw cards until you have 8 cards in your hand.",
		'es-es': "Al final de este turno, roba cartas hasta que tengas 8 cartas en tu mano.",
		'it-it': "Alla fine di questo turno, pesca fino ad avere otto carte in mano.",
		'pt-br': "No final desta vez de jogar, compre cartas até ter 8 cartas na sua mão.",
		'de-de': "Ziehe am Ende dieses Zuges so lang Karten, bis du 8 Karten auf deiner Hand hast."
	},
	trainerType: "Supporter",

}

export default card
