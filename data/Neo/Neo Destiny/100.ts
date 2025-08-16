import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Lucky Stadium",
		fr: "Stade de la chance",
		de: "Glücksarena"
	},

	illustrator: "Imakuni?",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nUne fois durant le tour de chaque joueur (avant son attaque), ce joueur peut lancer une pièce. Si c'est face, ce joueur pioche une carte.",
		de: "Once during each player's turn, that player may flip a coin. If heads, the player draws a card."
	},

	thirdParty: {
		cardmarket: 274752,
		tcgplayer: 86893
	}
}

export default card
