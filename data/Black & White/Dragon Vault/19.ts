import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "First Ticket",
		fr: "Ticket Prioritaire",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Before you flip a coin to decide who goes first in a game, you may play this card. Don't flip that coin, and you go first. If both players play First Ticket, flip the coin as normal. (You may play only 1 First Ticket before you flip that coin.) You may play as many Item cards as you like during your turn (before your attack).",
		fr: "Avant de lancer une pièce pour décider qui joue en premier, vous pouvez jouer cette carte. Le lancer de pièce n'a pas lieu, et vous jouez en premier. Si les 2 joueurs jouent Ticket Prioritaire, procédez au lancer de pièce. (Vous ne pouvez jouer qu'un seul Ticket Prioritaire avant le lancer de pièce.)",
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281019,
		tcgplayer: 85470
	}
}

export default card
