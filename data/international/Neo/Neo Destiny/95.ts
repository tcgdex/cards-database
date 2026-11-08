import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Radio Tower",
		'fr-fr': "Tour radio",
		'de-de': "Radio Turm"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may look at the top 2 cards of his or her deck and put them back in the same order.",
		'fr-fr': "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nUne fois pendant le tour de chaque joueur (avant son attaque), ce joueur peut regarder les 2 premières cartes du dessus de son deck et les replacer dans le même ordre.",
		'de-de': "Once during each player's turn (before attacking), that player may look at the top 2 cards of his or her deck and put them back in the same order."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274747,
				tcgplayer: 88497
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274747,
				tcgplayer: 88497
			}
		}
	]
}

export default card
