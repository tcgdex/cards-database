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
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may flip a coin. If heads, that player puts a basic Energy card from his or her discard pile into his or her hand.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nUne fois durant le tour de chaque joueur (avant son attaque), ce joueur peut lancer une pièce. Si c'est face, ce joueur peut ajouter une carte Énergie de base de sa pile de défausse à sa main.",
		de: "Once during each player´s turn (before attacking), that player may flip a coin. If heads, that player puts a basic Energy card from his or her discard pile into his or her hand."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274751,
				tcgplayer: 85251
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274751,
				tcgplayer: 85251
			}
		}
	]
}

export default card
