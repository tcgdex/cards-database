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
		fr: "Avant de lancer une pièce pour décider qui joue en premier, vous pouvez jouer cette carte. Le lancer de pièce n'a pas lieu, et vous jouez en premier. Si les 2 joueurs jouent Ticket Prioritaire, procédez au lancer de pièce. (Vous ne pouvez jouer qu'un seul Ticket Prioritaire avant le lancer de pièce.)",
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281019
	}
}

export default card
