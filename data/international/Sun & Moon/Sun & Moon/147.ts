import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Lillie",
		'fr-fr': "Lilie",
		'es-es': "Lylia",
		'it-it': "Lylia",
		'pt-br': "Lílian",
		'de-de': "Lilly"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main. Si c’est votre premier tour, piochez des cartes jusqu’à ce que vous ayez 8 cartes en main.",
		'en-us': "Draw cards until you have 6 cards in your hand. If it’s your first turn, draw cards until you have 8 cards in your hand.",
		'es-es': "Roba cartas hasta que tengas 6 cartas en tu mano. Si es tu primer turno, roba cartas hasta que tengas 8 cartas en tu mano.",
		'it-it': "Pesca fino ad avere sei carte in mano. Se è il tuo primo turno, pesca fino ad avere otto carte in mano.",
		'pt-br': "Compre cartas até ter 6 cartas na sua mão. Se for a sua primeira vez de jogar, compre cartas até ter 8 cartas na sua mão.",
		'de-de': "Ziehe so lange Karten, bis du 6 Karten auf der Hand hast. Wenn es dein erster Zug ist, ziehe so lange Karten, bis du 8 Karten auf der Hand hast."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 295460,
		tcgplayer: 127019
	}
}

export default card
