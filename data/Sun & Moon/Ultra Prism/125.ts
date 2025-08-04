import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Lillie",
		fr: "Lilie",
		es: "Lylia",
		it: "Lylia",
		pt: "Lílian",
		de: "Lilly"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main. Si c’est votre premier tour, piochez des cartes jusqu’à ce que vous ayez 8 cartes en main.",
		en: "Draw cards until you have 6 cards in your hand. If it’s your first turn, draw cards until you have 8 cards in your hand.",
		es: "Roba cartas hasta que tengas 6 cartas en tu mano. Si es tu primer turno, roba cartas hasta que tengas 8 cartas en tu mano.",
		it: "Pesca fino ad avere sei carte in mano. Se è il tuo primo turno, pesca fino ad avere otto carte in mano.",
		pt: "Compre cartas até ter 6 cartas na sua mão. Se for a sua primeira vez de jogar, compre cartas até ter 8 cartas na sua mão.",
		de: "Ziehe so lange Karten, bis du 6 Karten auf der Hand hast. Wenn es dein erster Zug ist, ziehe so lange Karten, bis du 8 Karten auf der Hand hast."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 316050,
		tcgplayer: 157742
	}
}

export default card
