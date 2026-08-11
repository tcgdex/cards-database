import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Imposter Oak's Revenge",
		fr: "La revanche de Chen, l'imposteur",
		de: "Die Rache des falschen Profess"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard a card from your hand in order to play this card. Your opponent shuffles his or her hand into his or her deck, then draws 4 cards.",
		fr: "Défaussez une carte de votre main pour pouvoir jouer cette carte. Votre adversaire mélange sa main avec son deck, puis pioche 4 cartes.",
		de: "Lege eine Karte von deiner hand ab, um diese Karte zu spielen. Dein gegner mischt seine oder ihre hand in sein oder ihr Deck und zieht dann vier Karten."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274129,
				tcgplayer: 86270
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274129,
				tcgplayer: 86270
			}
		}
	]
}

export default card
