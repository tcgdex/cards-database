import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Energy Stadium",
		fr: "Stade Énergie",
		de: "Energie-Arena"
	},

	illustrator: "Hideki Kazama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nUne fois durant le tour de chaque joueur (avant son attaque), ce joueur peut lancer une pièce. Si c'est face, ce joueur peut ajouter une carte Énergie de base de sa pile de défausse à sa main.",
		de: "Once during each player´s turn (before attacking), that player may flip a coin. If heads, that player puts a basic Energy card from his or her discard pile into his or her hand."
	},

	thirdParty: {
		cardmarket: 274751,
		tcgplayer: 85251
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
